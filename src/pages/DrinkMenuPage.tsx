import React from "react";
import Header from "../components/Header";

const DrinkMenuPage: React.FC = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      {/* 固定ヘッダー */}
      <Header title="飲み物" />

      {/* スクロール区域 */}
      <div
        style={{
          height: 'calc(100vh - 130px)',
          overflowY: 'auto',
          padding: '20px',
          maxWidth: '420px',
          margin: '56px auto 0', // ← これだけ残す
        }}
      >
        {/* 🍸 おすすめドリンク */}
        <h3>おすすめドリンク</h3>

        <div
          style={{
            background: '#fff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            marginBottom: '20px',
          }}
        >
          <p style={{ margin: '0 0 8px' }}>
            🥂 <strong>碧 ハイボール</strong>
          </p>
          <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>
            食事にもデザートにも合う完ぺきなハイボール。
          </p>
        </div>

        <div
          style={{
            background: '#fff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            marginBottom: '20px',
          }}
        >
          <p style={{ margin: '0 0 8px' }}>
            🍶 <strong>田酒</strong>
          </p>
          <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>
            水のように飲める日本酒です。
          </p>
        </div>

        <div
          style={{
            background: '#fff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            marginBottom: '20px',
          }}
        >
          <p style={{ margin: '0 0 8px' }}>
            🍹 <strong>鳥飼 ソーダ割</strong>
          </p>
          <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>
            米焼酎とは思えないフルーティーさ。米焼酎の概念が変わります。
          </p>
        </div>

        {/* 🍺 アルコール */}
        <h3>アルコール</h3>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li>🍺 ビール</li>
          <li>🍷 赤ワイン</li>
          <li>🍷 白ワイン</li>
          <li>🥂 スパークリングワイン</li>
          <li>🍶 日本酒</li>
          <li>🍹 カクテル（カシス / ピーチ / etc）</li>
        </ul>

        {/* 🥤 ソフトドリンク */}
        <h3 style={{ marginTop: '24px' }}>ソフトドリンク</h3>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
          <li>🧃 オレンジジュース</li>
          <li>🥤 コーラ</li>
          <li>🥤 ジンジャーエール</li>
          <li>🍇 グレープジュース</li>
          <li>🍵 ウーロン茶</li>
        </ul>

        <p style={{ marginTop: '30px', fontSize: '13px', color: '#666' }}>
          ※ メニューは会場により変更となる場合があります。
        </p>
      </div>
    </div>
  );
};

export default DrinkMenuPage;
