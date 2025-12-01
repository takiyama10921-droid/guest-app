import React from "react";
import Header from "../components/Header";

const ProfilePage: React.FC = () => {

  return (
    <div style={{ paddingTop: "80px" }}>
      <Header title="😊 プロフィール" />
      {/* メイン写真 */}
      {/* <img
        src="/photos/profile_main.jpg"
        alt=""
        style={{
          width: '80%',
          maxWidth: '300px',
          borderRadius: '16px',
          boxShadow: '0 3px 8px rgba(0,0,0,0.25)',
          marginTop: '20px',
        }}
      /> */}

      {/* 新郎・新婦プロフィール */}
      <div
        style={{
          width: '90%',
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'left',
          background: '#fafafa',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}
      >
        <h3 style={{ margin: 0 }}>👦 新郎</h3>
        <p style={{ margin: '4px 0 12px', color: '#555' }}>
          ・名前：●● ●● ・出身：東京 ・趣味：サッカー・カメラ
          ・性格：穏やかで優しいタイプ
        </p>

        <h3 style={{ margin: 0 }}>👰 新婦</h3>
        <p style={{ margin: '4px 0', color: '#555' }}>
          ・名前：●● ●● ・出身：神奈川 ・趣味：カフェ巡り・旅行
          ・性格：明るく笑顔が多いタイプ
        </p>
      </div>

      {/* タイムライン風ストーリー */}
      <div
        style={{
          width: '90%',
          maxWidth: '400px',
          margin: '24px auto 0',
          textAlign: 'left',
          background: 'white',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>📖 2人のストーリー</h3>

        <div style={{ borderLeft: '3px solid #4F46E5', paddingLeft: '12px' }}>
          <p style={{ margin: '12px 0' }}>
            <strong>2023年 7月</strong>　池袋のかき氷屋さんで初デート
          </p>
          <p style={{ margin: '12px 0' }}>
            <strong>2023年 8月</strong>　交際スタート
          </p>
          <p style={{ margin: '12px 0' }}>
            <strong>2025年 8月</strong>　プロポーズ
          </p>
          <p style={{ margin: '12px 0' }}>
            <strong>2026年 9/26</strong>　結婚式で皆さんにご報告！
          </p>
        </div>
      </div>

      {/* Q&Aコーナー */}
      <div
        style={{
          width: '90%',
          maxWidth: '400px',
          margin: '24px auto 0',
          textAlign: 'left',
          background: '#fdfdfd',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}
      >
        <h3 style={{ marginTop: 0 }}>❓ Q&A</h3>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
            Q. 初デートは？
          </p>
          <p style={{ margin: 0, color: '#555' }}>
            映画館 → カフェでお話しました。
          </p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
            Q. お互いの第一印象は？
          </p>
          <p style={{ margin: 0, color: '#555' }}>
            新郎：明るくて話しやすい人だなと思った。
          </p>
          <p style={{ margin: 0, color: '#555' }}>
            新婦：優しくて落ち着いている印象でした。
          </p>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
            Q. 休みの日は何してる？
          </p>
          <p style={{ margin: 0, color: '#555' }}>
            カフェ巡り、映画、旅行が多いです。
          </p>
        </div>

        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
            Q. 結婚の決め手は？
          </p>
          <p style={{ margin: 0, color: '#555' }}>
            一緒にいると素でいられて、何をしていても楽しかったからです。
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
