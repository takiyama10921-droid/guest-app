import { useEffect, useState } from "react";
// import { fetchUsers, updateCheckinStatus } from "../api/userApi";
import type { User } from "../types/User";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function GuestApp() {
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");
  const [guest, setGuest] = useState<User | null>(null);
  const [guestList, setGuestList] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Firestoreのリアルタイム監視
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "guest"), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<User, "id">),
      }));
      setGuestList(users);
      setLoading(false);
    });

    // 🔚 コンポーネントアンマウント時に監視解除
    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    console.log(JSON.stringify(guestList));
    const found = guestList.find(
      (g) => g.code.toUpperCase() === inputCode.toUpperCase()
    );
    if (!found?.checkedin) {
    // Firestoreなどで「checkedin: false」ならこの分岐
    setGuest(null);

    setMessage("受付がまだ完了していません。受付を済ませてから再度お試しください。");
    return;
  }
    setMessage("");
    setGuest(found || null);
    console.log(guest);
  };


  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "60px" }}>読み込み中...</p>;
  }

  // ログイン前状態
  if (!guest) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h1>ようこそ！</h1>
        <div className="p-4">
          <div className="text-green-600">
            {/* ✅ 受付コード入力欄をここに追加 */}
            <div style={{ marginTop: '10px' }}>
              <p>受付で係の方から提示されたコードを入力してください</p>
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="例: ST01"
                style={{
                  fontSize: '1.2em',
                  padding: '5px 10px',
                  textAlign: 'center',
                }}
              />
              <div>
                <button
                  onClick={handleLogin}
                  style={{
                    marginTop: '10px',
                    padding: '8px 16px',
                    fontSize: '1em',
                    cursor: 'pointer',
                  }}
                >
                  決定
                </button>
              </div>
              {/* 🔽 メッセージ表示部分を追加 */}
              {message && (
                <p
                  style={{
                    color: message.includes('受付') ? 'red' : 'gray',
                    marginTop: '10px',
                  }}
                >
                  {message}
                </p>
              )}
              {inputCode && !guestList.find((g) => g.code === inputCode) && (
                <p style={{ color: 'gray', marginTop: '10px' }}>
                  ※ コードが間違っている可能性があります
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  //　ログイン後状態
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>ようこそ、{guest.name} 様！</h1>
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

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => setGuest(null)}>← 戻る</button>
      </div>
    </div>
  );
}
