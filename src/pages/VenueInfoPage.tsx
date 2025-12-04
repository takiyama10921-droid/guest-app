import React from "react";
import Header from "../components/Header";

const VenueInfoPage: React.FC = () => {

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",   // ページ全体のスクロール禁止
      }}
    >
      <Header title=" ご案内・注意事項" />

      {/* コンテンツをスクロールさせる領域 */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",        // ← ここだけスクロール
          padding: "80px 0 20px",   // ヘッダー分の余白 + 下に少し余裕
        }}
      >
        {/* 披露宴会場（カード） */}
        <section
          style={{
            width: '90%',
            maxWidth: '420px',
            margin: '0 auto',
            textAlign: 'left',
            background: '#fafafa',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <h3 style={{ margin: '0 0 8px 0' }}>🎉 披露宴会場</h3>
          <p style={{ margin: '0', color: '#444' }}>
            会場：「〇〇の間」（3F） —
            スタッフがご案内します。到着後はそのままエレベーターでお上がりください。
          </p>
        </section>

        {/* 会場内の案内 */}
        <section
          style={{
            width: '90%',
            maxWidth: '420px',
            margin: '18px auto 0',
            textAlign: 'left',
            background: 'white',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ marginTop: 0 }}>📌 会場内のご案内</h3>
          <ul
            style={{
              paddingLeft: '18px',
              margin: 0,
              color: '#444',
              lineHeight: 1.8,
            }}
          >
            <li>トイレ：披露宴フロア（エレベーター降りて左手）</li>
            <li>喫煙所：1Fロビー奥の指定スペース（館内は全面禁煙）</li>
            <li>クローク：1F 受付横（披露宴中はお預かり可能）</li>
          </ul>
        </section>

        {/* 当日のお願い */}
        <section
          style={{
            width: '90%',
            maxWidth: '420px',
            margin: '18px auto 0',
            textAlign: 'left',
            background: '#fdfdfd',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ marginTop: 0 }}>📱 当日のお願い</h3>

          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0' }}>スマホの設定</p>
            <p style={{ margin: 0, color: '#444' }}>
              式中はマナーモードまたはサイレントにしてください。フラッシュ撮影はご遠慮ください。
            </p>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0' }}>写真撮影</p>
            <p style={{ margin: 0, color: '#444' }}>
              挙式中：撮影NG（会場規則に準拠）／
              披露宴中：撮影OK（SNS投稿は控えめにお願いします）
            </p>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0' }}>飲み物</p>
            <p style={{ margin: 0, color: '#444' }}>
              フリードリンクです。スタッフにお申し付けください。
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 700, margin: '0 0 6px 0' }}>再入場について</p>
            <p style={{ margin: 0, color: '#444' }}>
              一時外出の際は受付またはスタッフにお声がけください。席番号を確認いたします。
            </p>
          </div>
        </section>

        {/* その他のご案内 */}
        <section
          style={{
            width: '90%',
            maxWidth: '420px',
            margin: '18px auto 28px',
            textAlign: 'left',
            background: '#fafafa',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ marginTop: 0 }}>👶 その他のご案内</h3>

          <p style={{ margin: '6px 0', color: '#444' }}>
            おむつ替え：○階お手洗いにベビーシートあり。授乳室をご希望の方はスタッフまでお声がけください。
          </p>

          <p style={{ margin: '6px 0', color: '#444' }}>
            クロークは1F受付横。貴重品は各自で管理ください（預かりは行っていますが貴重品はご自身で保管をお願いいたします）。
          </p>
        </section>
      </div>
    </div>
  );
};

export default VenueInfoPage;
