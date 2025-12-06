import React, { useEffect } from "react";
import Header from "../components/Header";
import mapImage from "../assets/img_access01.jpg";

const VenueMapPage: React.FC = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div
      style={{
        height: '100dvh', // 画面全体
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // ページ全体のスクロール禁止
      }}
    >
      {/* 固定ヘッダー */}
      <Header title=" 会場MAP" />

      {/* 固定ヘッダーの下だけスクロール領域にする */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto', // ← スクロールはここだけ
          padding: '56px 0 20px', // ヘッダー分＋余白
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '90%',
            maxWidth: '430px',
            background: '#ffffff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            textAlign: 'left',
            boxSizing: 'border-box',
          }}
        >
          <h3 style={{ marginTop: 0 }}>🔍 会場配置図</h3>
          <p style={{ margin: '4px 0 12px', color: '#555' }}>
            受付・披露宴会場・控室などの位置関係をご確認ください。
          </p>

          <img
            src={mapImage}
            alt="会場MAP"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100dvh - 140px)', // ★★ これが超重要 ★★
              objectFit: 'contain', // はみ出さず収める
              borderRadius: '10px',
              border: '1px solid #ddd',
            }}
          />

          <p style={{ marginTop: '12px', color: '#666', fontSize: '14px' }}>
            ※ ご不明な点があれば、お近くのスタッフへお声がけください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default VenueMapPage;
