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
        inset: 0, // ★ top/left/right/bottom = 0
        backgroundColor: '#fff', // ★ 最上位に背景色
        overflow: 'hidden', // ★ 完全スクロール禁止
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ヘッダー */}
      <Header title=" 会場MAP" />

      {/* ヘッダー下のコンテンツ */}
      <div
        style={{
          flex: 1, // ★ 高さ計算しない
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
          boxSizing: 'border-box',
          paddingTop: '76px',
        }}
      >
        <div
          style={{
            width: '90%',
            maxWidth: '430px',
            height: '100%',
            backgroundColor: '#e3f0ff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3 style={{ margin: '0 0 2px', fontSize: '16px' }}>🔍 会場地図</h3>

          <p
            style={{
              margin: '0 0 2px',
              fontSize: '13px',
              color: '#555',
              lineHeight: 1.3,
            }}
          >
            受付・披露宴会場・控室などの位置関係をご確認ください。
          </p>

          {/* 画像領域 */}
          <div
            style={{
              flex: '1 1 auto',
              height: '100%',
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
                width: '100%',
                height: '100%', // ← maxHeight じゃなく height
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid #ddd',
              }}
            />
          </div>

          <p
            style={{
              margin: '2px 0 0',
              fontSize: '12px',
              color: '#666',
              lineHeight: 1.3,
            }}
          >
            ※ ご不明な点があれば、お近くのスタッフへお声がけください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default VenueMapPage;
