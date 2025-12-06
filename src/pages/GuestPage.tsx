// src/pages/GuestApp.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGuest } from "../context/GuestContext";

export default function GuestApp() {
  const [inputCode, setInputCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { guest, setGuest } = useGuest();

  // ▼ 修正：固定コードでログイン
  const handleLogin = () => {
    if (inputCode !== '0926') {
      setMessage('※ コードが間違っています');
      return;
    }

    setGuest({
      id: 'common',
      name: 'ゲスト',
      seatNumber: '-',
      message: '',
      checkedin: true,
      code: '0926',
      hasTransportationGift: false,
      giftReceivedBefore: false,
      side: 'groom',
    });

    setMessage('');
  };

  const handleOpenSeating = () => navigate('/seating');
  const handleOpenMenu = () => navigate('/menu');
  const handleOpenPhoto = () => navigate('/photo');
  const handleOpenPhotoUpload = () => navigate('/photoUpload');
  const handleOpenProfile = () => navigate('/profile');
  const handleOpenVenueInfo = () => navigate('/venueInfo');
  const handleOpenVenueMap = () => navigate('/venueMap');
  const handleOpenMessage = () => navigate('/message');
  const handleOpenDrink = () => navigate('/drink');

  const memberColors = [
    '#fff9cc', // 岩本：黄色・薄い
    '#f4e8ff', // 深澤：紫・薄い
    '#ffffff', // ラウール：白
    '#e3f0ff', // 渡辺：青・薄い
    '#ffe8cc', // 向井：オレンジ・薄い
    '#e6ffe6', // 阿部：緑・薄い
    '#f0f0f0', // 目黒：黒（薄いグレー）
    '#ffdddd', // 宮舘：赤・薄い
    '#ffe6f5', // 佐久間：ピンク・薄い
  ];
  // ログイン前
  if (!guest) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px',
          boxSizing: 'border-box',
          backgroundColor: '#f7f3ff', // ← ★ 追加
        }}
      >
        <h1>ようこそ！</h1>
        <p>QRの下にあるコードを入力してください</p>

        <input
          type="text"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="例:0926"
          style={{
            fontSize: '1.2em',
            padding: '5px 10px',
            textAlign: 'center',
            marginTop: '10px',
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: '15px',
            padding: '8px 16px',
            fontSize: '1em',
            cursor: 'pointer',
          }}
        >
          決定
        </button>

        {message && (
          <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>
        )}
      </div>
    );
  }

  // ログイン後
  return (
    <div
      style={{
        textAlign: 'center',
        // marginTop: '200px',
        minHeight: '100dvh',
        backgroundColor: '#f7f3ff', // ← ★ 追加
        padding: '20px 0',
      }}
    >
      <h1>ようこそ！</h1>
      <h2>2026.9.26</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginTop: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <button onClick={handleOpenSeating} style={{ backgroundColor: memberColors[0] }}>席次表</button>
        <button onClick={handleOpenPhoto} style={{ backgroundColor: memberColors[1] }}>前撮りフォト</button>
        <button onClick={handleOpenPhotoUpload} style={{ backgroundColor: memberColors[4] }}>
          写真
          <br />
          アップロード
        </button>
        <button onClick={handleOpenMenu} style={{ backgroundColor: memberColors[7] }}>お食事</button>
        <button onClick={handleOpenDrink} style={{ backgroundColor: memberColors[2] }}>飲み物</button>
        <button onClick={handleOpenVenueInfo} style={{ backgroundColor: memberColors[5] }}>
          ご案内
          <br />
          注意事項
        </button>
        <button onClick={handleOpenMessage} style={{ backgroundColor: memberColors[8] }}>メッセージ</button>
        <button onClick={handleOpenProfile} style={{ backgroundColor: memberColors[6] }}>プロフィール</button>
        <button onClick={handleOpenVenueMap} style={{ backgroundColor: memberColors[3] }}>
          会場内
          <br />
          MAP
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button onClick={() => setGuest(null)}>← ログアウト</button>
      </div>
    </div>
  );
}
