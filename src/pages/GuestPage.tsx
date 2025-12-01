// src/pages/GuestApp.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGuest } from "../context/GuestContext";

export default function GuestApp() {
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { guest, setGuest } = useGuest();

  // ▼ 修正：固定コードでログイン
  const handleLogin = () => {
    if (inputCode !== "0926") {
      setMessage("※ コードが間違っています");
      return;
    }

    // ▼ 修正：ダミー共通ゲストをセット
    setGuest({
      id: "common",
      name: "ゲスト",
      seatNumber: "-",
      message: "",
      checkedin: true,
      code: "0926",
      hasTransportationGift: false,
      giftReceivedBefore: false,
      side: "groom"
    });

    setMessage("");
  };

  // ページ遷移
  const handleOpenSeating = () => navigate("/seating");
  const handleOpenMenu = () => navigate("/menu");
  const handleOpenPhoto = () => navigate("/photo");
  const handleOpenPhotoUpload = () => navigate("/photoUpload");
  const handleOpenProfile = () => navigate("/profile");
  const handleOpenVenueInfo = () => navigate("/venueInfo");
  const handleOpenVenueMap = () => navigate("/venueMap");
  const handleOpenMessage = () => navigate("/message");

  // ログイン前
  if (!guest) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>ようこそ！</h1>
        <p>QRの下にあるコードを入力してください</p>

        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="例:0926"
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
              color: "red",
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
        <button onClick={handleOpenPhotoUpload}>写真アップロード</button>
        <button onClick={handleOpenPhoto}>フォトギャラリー</button>
        <button onClick={handleOpenProfile}>プロフィール</button>
        <button onClick={handleOpenVenueInfo}>ご案内/注意事項</button>
        <button onClick={handleOpenVenueMap}>会場内MAP</button>
        <button onClick={handleOpenMessage}>メッセージ投稿</button>
        <button>？</button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => setGuest(null)}>← ログアウト</button>
      </div>
    </div>
  );
}
