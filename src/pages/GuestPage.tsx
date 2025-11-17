// src/pages/GuestApp.tsx
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useGuest } from "../context/GuestContext";
import type { User } from "../types/User";

export default function GuestApp() {
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");
  const [guestList, setGuestList] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { guest, setGuest } = useGuest();

  // Firestore監視
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "guest"), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<User, "id">),
      }));
      setGuestList(users);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    const found = guestList.find(
      (g) => g.code.toUpperCase() === inputCode.toUpperCase()
    );

    if (!found) {
      setMessage("※ コードが間違っている可能性があります");
      return;
    }

    if (!found.checkedin) {
      setGuest(null);
      setMessage("受付がまだ完了していません。受付を済ませてから再度お試しください。");
      return;
    }

    setMessage("");
    setGuest(found);
  };

  const handleOpenSeating = () => {
    navigate("/seating");
  };
  const handleOpenMenu = () => {
    navigate("/menu");
  };
  const handleOpenPhoto = () => {
    navigate("/photo");
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "60px" }}>読み込み中...</p>;
  }

  // ログイン前
  if (!guest) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>ようこそ！</h1>
        <p>受付で係の方から提示されたコードを入力してください</p>

        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="例: ST01"
          style={{
            fontSize: "1.2em",
            padding: "5px 10px",
            textAlign: "center",
          }}
        />

        <div>
          <button
            onClick={handleLogin}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            決定
          </button>
        </div>

        {message && (
          <p
            style={{
              color: message.includes("受付") ? "red" : "gray",
              marginTop: "10px",
            }}
          >
            {message}
          </p>
        )}
      </div>
    );
  }

  // ログイン後
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>ようこそ<br />{guest.name} 様！</h1>
      <p>席番号: {guest.seatNumber}</p>
      <p>{guest.message}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "30px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <button onClick={handleOpenSeating}>席次表</button>
        <button onClick={handleOpenMenu}>メニュー</button>
        <button>タイムスケジュール</button>
        <button onClick={handleOpenPhoto}>フォトギャラリー</button>
        <button>プロフィール</button>
        <button>会場案内</button>
        <button>ご案内/注意事項</button>
        <button>メッセージか、寄せ書き？</button>
        <button>今日の見どころ</button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => setGuest(null)}>← ログアウト</button>
      </div>
    </div>
  );
}
