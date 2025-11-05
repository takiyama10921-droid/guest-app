import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, updateDoc, doc, writeBatch } from "firebase/firestore";
import { db } from "../firebase";
import type { User } from "../types/User";

export const seedGuests = async () => {
  const batch = writeBatch(db);
  const guestCollection = collection(db, "guest");

  const guests = [
    { name: "佐藤太郎", code: "TH01", checkedin: false, message: "ようこそ！", seatNumber: "A-1", hasTransportationGift:true, giftReceivedBefore:false },
    { name: "鈴木花子", code: "TH02", checkedin: false, message: "楽しんでください！", seatNumber: "A-2",hasTransportationGift:false,giftReceivedBefore:true },
    { name: "田中一郎", code: "TH03", checkedin: false, message: "おめでとうございます！", seatNumber: "A-3",hasTransportationGift:false,giftReceivedBefore:true },
    { name: "高橋健", code: "TH04", checkedin: false, message: "お越しいただきありがとうございます！", seatNumber: "A-4",hasTransportationGift:false,giftReceivedBefore:true },
    { name: "伊藤美咲", code: "TH05", checkedin: false, message: "どうぞごゆっくり！", seatNumber: "A-5",hasTransportationGift:false,giftReceivedBefore:true }
  ];

  guests.forEach((guest) => {
    const docRef = doc(guestCollection); // Firestoreが自動でIDを付与
    batch.set(docRef, guest);
  });

  await batch.commit();
  console.log("10件のゲストデータを登録しました！");
};

export default function ReceptionPage() {
  const { code } = useParams<{ code: string }>();
  const [guest, setGuest] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ゲスト情報取得
  useEffect(() => {
    const fetchGuest = async () => {
      if (!code) return;

      const q = query(collection(db, 'guest'), where('code', '==', code));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        setGuest({ id: docSnap.id, ...(docSnap.data() as Omit<User, 'id'>) });
      } else {
        setGuest(null);
        alert(`コード ${code} のゲストは存在しません`);
      }
      setLoading(false);
    };

    fetchGuest();
  }, [code]);
  // 🔒 戻るボタン無効化（履歴遷移ブロック）
  useEffect(() => {
    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // 受付完了
  const handleCheckin = async () => {
    if (!guest) return;

    const q = query(collection(db, 'guest'), where('code', '==', guest.code));
    const querySnapshot = await getDocs(q);

    for (const docSnap of querySnapshot.docs) {
      const docRef = doc(db, 'guest', docSnap.id);
      await updateDoc(docRef, { checkedin: true });
    }

    setGuest((prev) => (prev ? { ...prev, checkedin: true } : null));
  };

  // リセット
  const handleReset = async () => {
    if (!guest) return;

    const q = query(collection(db, 'guest'), where('code', '==', guest.code));
    const querySnapshot = await getDocs(q);

    for (const docSnap of querySnapshot.docs) {
      const docRef = doc(db, 'guest', docSnap.id);
      await updateDoc(docRef, { checkedin: false });
    }

    setGuest((prev) => (prev ? { ...prev, checkedin: false } : null));
  };

  if (loading) return <p>読み込み中...</p>;
  if (!guest) return <p>ゲストが見つかりません</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>受付画面</h1>
      <p>名前：{guest.name}</p>
      <p>受付コード：{guest.code}</p>
      <p>ご祝儀：{guest.giftReceivedBefore ? '当日受付': '事前にお預かり済'}</p>
      <p>お車代：{guest.hasTransportationGift ? 'あり': 'なし'}</p>
      <p>受付状態：{guest.checkedin ? '✅ 受付済' : '❌ 未受付'}</p>
      <div style={{ marginTop: 20 }}>
        <button onClick={handleCheckin} style={{ marginRight: 10 }}>
          受付完了
        </button>
        <button onClick={handleReset}>リセット</button>
        <button onClick={seedGuests}>初期データ投入</button>
      </div>
    </div>
  );
}
