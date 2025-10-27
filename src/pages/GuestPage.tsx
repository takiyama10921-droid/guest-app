import { useParams } from "react-router-dom";
import { guests, type Guest } from "../data/guests";

export default function GuestPage() {
  const { id } = useParams<{ id: string }>();
  const guest: Guest | undefined = guests.find((g) => g.id === id);

  if (!guest) return <p>ゲスト情報が見つかりません。</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ようこそ<br/>{guest.name} 様</h1>
      <p>席番号: {guest.seatNumber}</p>
      <p>{guest.message}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
        <button>席次表</button>
        <button>メニュー</button>
        <button>スケジュール</button>
        <button>フォトギャラリー</button>
        <button>プロフィール</button>
        <button>会場アクセス</button>
        <button>ギフト</button>
        <button>メッセージ</button>
        <button>Welcome</button>
      </div>
    </div>
  );
}
