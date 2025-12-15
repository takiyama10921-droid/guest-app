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
import type { User } from "../types/User";

/* 初期データ投入（開発用） */
export const seedGuests = async () => {
  const batch = writeBatch(db);
  const guestCollection = collection(db, "guest");

  const guests = [
    {
      name: '佐藤太郎',
      code: 'TH01',
      checkedin: false,
      message: 'ようこそ！',
      seatNumber: 'A-1',
      hasTransportationGift: true,
      transportationGiftGiven: false,
      giftReceivedBefore: false,
      side: 'groom',
    },
    {
      name: '鈴木花子',
      code: 'TH02',
      checkedin: false,
      message: '楽しんでください！',
      seatNumber: 'A-2',
      hasTransportationGift: false,
      transportationGiftGiven: false,
      giftReceivedBefore: true,
      side: 'bride',
    },
    {
      name: '田中一郎',
      code: 'TH03',
      checkedin: false,
      message: 'おめでとうございます！',
      seatNumber: 'A-3',
      hasTransportationGift: false,
      transportationGiftGiven: false,
      giftReceivedBefore: true,
      side: 'groom',
    },
    {
      name: '高橋健',
      code: 'TH04',
      checkedin: false,
      message: 'お越しいただきありがとうございます！',
      seatNumber: 'A-4',
      hasTransportationGift: false,
      transportationGiftGiven: false,
      giftReceivedBefore: false,
      side: 'groom',
    },
    {
      name: '伊藤美咲',
      code: 'TH05',
      checkedin: false,
      message: 'どうぞごゆっくり！',
      seatNumber: 'A-5',
      hasTransportationGift: false,
      transportationGiftGiven: false,
      giftReceivedBefore: true,
      side: 'bride',
    },
  ];

  guests.forEach((guest) => {
    const docRef = doc(guestCollection);
    batch.set(docRef, guest);
  });

  await batch.commit();
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

        {guest.hasTransportationGift &&(
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
