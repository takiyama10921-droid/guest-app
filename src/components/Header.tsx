import React from "react";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  title: string;
  bgColor?: string;
};

const Header: React.FC<HeaderProps> = ({ title, bgColor = "#ffffff" }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '56px',
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // ← 左寄せに変更
        borderBottom: '1px solid #ddd',
        zIndex: 1000,
        paddingLeft: '100px', // ← 戻るボタンの幅＋余白
      }}
    >
      {/* 戻るボタン */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          left: '12px', // ← 左固定
          padding: '6px 12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          background: '#f7f7f7',
          cursor: 'pointer',
        }}
      >
        ← 戻る
      </button>

      {/* タイトル */}
      <h2 style={{ margin: 0, fontSize: '18px' }}>{title}</h2>
    </div>
  );
};

export default Header;
