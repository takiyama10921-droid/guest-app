import React, { useEffect } from "react";
import Header from "../components/Header";
import groomImg from "../assets/IMG_6736.png";  // 新郎写真
import brideImg from "../assets/IMG_6711.png";  // 新婦写真

const ProfilePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0'
      }}
    >
      {/* 固定ヘッダー */}
      <Header title="プロフィール" />

      {/* コンテンツ（スクロール部分） */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingTop: '76px',
          paddingBottom: '24px',
        }}
      >
        {/* ▼ 新郎プロフィール ▼ */}
        <div
          style={{
            width: '90%',
            maxWidth: '400px',
            margin: '0 auto',
            background: '#ffffff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            textAlign: 'left',
          }}
        >
          <h3 style={{ margin: 0 }}>👦 新郎プロフィール</h3>

          <img
            src={groomImg}
            alt="新郎写真"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%', // ← 丸型にする
              objectFit: 'cover', // ← 顔の中心をきれいに表示
              display: 'block',
              margin: '16px auto', // ← 中央寄せ
              border: '3px solid #eee', // ← ほんのり枠（おしゃれ）
            }}
          />

          <p style={{ margin: '0 0 8px', color: '#555' }}>・名前：秋山 朋輝</p>
          <p style={{ margin: '0 0 8px', color: '#555' }}>・出身：練馬区</p>
          <p style={{ margin: '0 0 8px', color: '#555' }}>
            ・趣味：スポーツ観戦
          </p>
          <p style={{ margin: 0, color: '#555' }}>
            ・性格：穏やかで優しいタイプ
          </p>
        </div>

        {/* ▼ 新婦プロフィール ▼ */}
        <div
          style={{
            width: '90%',
            maxWidth: '400px',
            margin: '24px auto 0',
            background: '#ffffff',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            textAlign: 'left',
          }}
        >
          <h3 style={{ margin: 0 }}>👰 新婦プロフィール</h3>

          <img
            src={brideImg}
            alt="新婦写真"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              margin: '16px auto',
              border: '3px solid #eee',
            }}
          />

          <p style={{ margin: '0 0 8px', color: '#555' }}>・名前：中島 瞳</p>
          <p style={{ margin: '0 0 8px', color: '#555' }}>・出身：足立区</p>
          <p style={{ margin: '0 0 8px', color: '#555' }}>
            ・趣味：カフェ巡り／旅行
          </p>
          <p style={{ margin: 0, color: '#555' }}>
            ・性格：明るくて笑顔が多いタイプ
          </p>
        </div>

        {/* ▼ ストーリー & Q&A（元コードそのまま利用可） ▼ */}
        {/* ここからはあなたの元コードそのまま貼ってOK */}
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
              <strong>2023年 7月</strong>　初デート
            </p>
            <p style={{ margin: '12px 0' }}>
              <strong>2023年 8月</strong>　交際スタート
            </p>
            <p style={{ margin: '12px 0' }}>
              <strong>2025年 8月</strong>　プロポーズ
            </p>
            <p style={{ margin: '12px 0' }}>
              <strong>2026年 9/26</strong>　結婚式
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
          <h3 style={{ marginTop: 0 }}>❓ Q&A（仮）</h3>

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
    </div>
  );
};

export default ProfilePage;
