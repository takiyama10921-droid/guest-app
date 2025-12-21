import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase";
import Papa from "papaparse";
import type { User } from "../types/User";

// TRUE / FALSE → boolean 変換
const toBool = (v: any): boolean =>
  String(v).toLowerCase() === "true";

export const seedGuests = async () => {
  // ① CSV読み込み
  const csvText = await fetch("/guests.csv").then((res) => res.text());

  // ② CSVパース
  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  // ③ CSV → User 型へ変換（undefined防止）
  const guests: User[] = (result.data as any[])
    .filter((row) => row.name && row.code && row.side) // 最低限チェック
    .map((row) => ({
      name: row.name,
      code: row.code,
      checkedin: toBool(row.checkedin),
      message: row.message ?? "",
      seatNumber: row.seatNumber ?? "",
      hasTransportationGift: toBool(row.hasTransportationGift),
      transportationGiftGiven: toBool(row.transportationGiftGiven),
      giftReceivedBefore: toBool(row.giftReceivedBefore),
      side: row.side,
    }));

  // ④ Firestoreへ一括登録
  const batch = writeBatch(db);
  const guestCollection = collection(db, "guest");

  guests.forEach((guest) => {
    // 🔽 code を documentId にする（重複防止・おすすめ）
    const docRef = doc(guestCollection, guest.code);
    batch.set(docRef, guest);
  });

  await batch.commit();

  console.log(`✅ ${guests.length} 件のゲストを登録しました`);
};

export default function ReceptionPage() {
  const { code } = useParams<{ code: string }>();
  const [guest, setGuest] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /* ゲスト取得 */
  useEffect(() => {
    const fetchGuest = async () => {
      if (!code) return;

      const q = query(collection(db, "guest"), where("code", "==", code));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const docSnap = snapshot.docs[0];
        setGuest({ id: docSnap.id, ...(docSnap.data() as Omit<User, "id">) });
      } else {
        alert("ゲストが見つかりません");
      }
      setLoading(false);
    };

    fetchGuest();
  }, [code]);

  /* Firestore更新 共通関数 */
  const updateGuest = async (data: Partial<User>) => {
    if (!guest) return;

    const q = query(collection(db, "guest"), where("code", "==", guest.code));
    const snapshot = await getDocs(q);

    for (const d of snapshot.docs) {
      await updateDoc(doc(db, "guest", d.id), data);
    }

    setGuest((prev) => (prev ? { ...prev, ...data } : null));
  };

  if (loading) return <p>読み込み中...</p>;
  if (!guest) return <p>ゲストが見つかりません</p>;

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>受付画面</h1>

      <p>名前：{guest.name}</p>

      <p>
        ご祝儀：
        {guest.giftReceivedBefore ? "✅ お預かり済" : "❌ 未受領"}
      </p>

      <p>
        お車代：
        {!guest.hasTransportationGift && " なし"}
        {guest.hasTransportationGift &&
          (guest.transportationGiftGiven
            ? " ✅ 渡し済"
            : " 💴 未渡し")}
      </p>

      <p>
        受付状態：
        {guest.checkedin ? " ✅ 受付済" : " ❌ 未受付"}
      </p>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
        }}
      >
        {!guest.checkedin && (
          <button onClick={() => updateGuest({ checkedin: true })}>
            受付完了
          </button>
        )}

        {guest.checkedin && (
          <button onClick={() => updateGuest({ checkedin: false })}>
            未受付にする
          </button>
        )}

        {!guest.giftReceivedBefore && (
          <button onClick={() => updateGuest({ giftReceivedBefore: true })}>
            ご祝儀受け取り
          </button>
        )}

        {/* {guest.giftReceivedBefore && (
          <button onClick={() => updateGuest({ giftReceivedBefore: false })}>
            未受領にする
          </button>
        )} */}

        {guest.hasTransportationGift && !guest.transportationGiftGiven &&(
          <button
            onClick={() => updateGuest({ transportationGiftGiven: true })}
          >
            お車代 渡し済みにする
          </button>
        )}

        <button onClick={seedGuests}>初期データ投入（開発用）</button>
      </div>
    </div>
  );
}
