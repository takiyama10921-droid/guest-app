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

    // ▼ 修正：ダミー共通ゲストをセット
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

  // ページ遷移
  const handleOpenSeating = () => navigate('/seating');
  const handleOpenMenu = () => navigate('/menu');
  const handleOpenPhoto = () => navigate('/photo');
  const handleOpenPhotoUpload = () => navigate('/photoUpload');
  const handleOpenProfile = () => navigate('/profile');
  const handleOpenVenueInfo = () => navigate('/venueInfo');
  const handleOpenVenueMap = () => navigate('/venueMap');
  const handleOpenMessage = () => navigate('/message');
  const handleOpenDrink = () => navigate('/drink');

  // ログイン前
  if (!guest) {
    return (
      <div
        style={{
          minHeight: '100dvh', // ← 100vhではなく100dvh
          overflow: 'hidden', // ← スクロール完全禁止
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // ← 完全中央寄せ
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px',
          boxSizing: 'border-box',
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
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h1>ようこそ！</h1>

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
        <button onClick={handleOpenSeating}>席次表</button>
        <button onClick={handleOpenPhoto}>前撮りフォト</button>
        <button onClick={handleOpenPhotoUpload}>
          写真
          <br />
          アップロード
        </button>
        <button onClick={handleOpenMenu}>お食事</button>
        <button onClick={handleOpenDrink}>飲み物</button>
        <button onClick={handleOpenVenueInfo}>
          ご案内
          <br />
          注意事項
        </button>
        <button onClick={handleOpenMessage}>メッセージ</button>
        <button onClick={handleOpenProfile}>プロフィール</button>
        <button onClick={handleOpenVenueMap}>
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
