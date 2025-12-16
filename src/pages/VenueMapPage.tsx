import React, { useEffect } from "react";
import Header from "../components/Header";
import mapImage from "../assets/map.jpg";

const VenueMapPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        overflow: 'hidden', // ★ 完全にスクロール禁止
      }}
    >
      {/* 固定ヘッダー */}
      <Header title=" 会場MAP" />

      {/* コンテンツ */}
      <div
        style={{
          position: 'absolute',
          top: '76px', // Header 高さ
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '430px',
          height: 'calc(100dvh - 96px)', // ← 画面に完全固定
          background: '#ffffff',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#e3f0ff',
        }}
      >
        <h3 style={{ margin: '0 0 8px' }}>🔍 会場地図</h3>

        <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#555' }}>
          受付・披露宴会場・控室などの位置関係をご確認ください。
        </p>

        {/* 画像領域 */}
        <div
          style={{
            flex: 1, // ★ 残り領域すべて
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={mapImage}
            alt="会場MAP"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '10px',
              border: '1px solid #ddd',
            }}
          />
        </div>

        <p style={{ marginTop: '8px', fontSize: '13px', color: '#666' }}>
          ※ ご不明な点があれば、お近くのスタッフへお声がけください。
        </p>
      </div>
    </div>
  );
};

export default VenueMapPage;
