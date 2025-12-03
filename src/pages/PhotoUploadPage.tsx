// src/pages/PhotoUploadPage.tsx
import Header from "../components/Header";

export default function PhotoUploadPage() {
  // Google Drive アップロードリンク（実際のリンクに差し替え）
  const groomDriveUrl =
    "https://drive.google.com/drive/folders/1OEQabaYkAGEtJCg39xP7zHJZwqUmPAoY?usp=drive_link";
  const brideDriveUrl =
    "https://drive.google.com/drive/folders/1Yxvbar_SBDQkYvM5n0eJzdOI0QIvg2H0?usp=drive_link";

  return (
    <div>
      <Header title="写真アップロード" />

      <div style={{ padding: "20px", textAlign: "center", marginTop: "100px" }}>
        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          当日の写真をぜひアップロード<br/>お願いいたします 📸
        </p>

        {/* 新郎側アップロードボタン */}
        <a
          href={groomDriveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          👦 新郎側ゲストはこちら
        </a>

        {/* 新婦側アップロードボタン */}
        <a
          href={brideDriveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          👰 新婦側ゲストはこちら
        </a>

        <div style={{ marginTop: "30px", color: "#444", fontSize: "0.9em" }}>
          <p>※ Googleアカウントにログインしてアップロードしてください</p>
          <p>※ 動画もアップロード可能です</p>
        </div>
      </div>
    </div>
  );
}

// ボタン共通スタイル
const buttonStyle: React.CSSProperties = {
  display: "block",
  padding: "12px 20px",
  backgroundColor: "#4b8fea",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "1.1em",
  fontWeight: "bold",
  margin: "12px auto",
  width: "80%",
};
