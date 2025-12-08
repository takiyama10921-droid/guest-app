import React from "react";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  title: string;
  bgColor?: string;
};

const Header: React.FC<HeaderProps> = ({ title}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "56px",
        background: "#F7F3FF",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        touchAction: "manipulation",
        zIndex: 1000,
        padding: "0 16px",       // ← 安全な左右余白
        boxSizing: "border-box", // ← ★ 横スクロール防止の決め手
        gap: "12px",             // ← ボタンとタイトルの間隔
      }}
    >
      {/* 戻るボタン */}
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "9px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          background: "#f7f7f7",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        ← 戻る
      </button>

      {/* タイトル */}
      <h2 style={{ margin: 0, fontSize: "18px", whiteSpace: "nowrap" }}>
        {title}
      </h2>
    </div>
  );
};

export default Header;
