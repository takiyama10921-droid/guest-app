import Header from "../components/Header";
import usePageScrollLock from "../hooks/usePageScrollLock";

export default function PhotoUploadPage() {
  const groomDriveUrl =
    "https://drive.google.com/drive/folders/1OEQabaYkAGEtJCg39xP7zHJZwqUmPAoY?usp=drive_link";
  const brideDriveUrl =
    "https://drive.google.com/drive/folders/1Yxvbar_SBDQkYvM5n0eJzdOI0QIvg2H0?usp=drive_link";

  // ★ページ全体のスクロールを止める
  usePageScrollLock(true);

  return (
    <div
      style={{
        position: "fixed",  // ←画面を完全に固定
        inset: 0,           // ←上下左右 0
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      <Header title=" 写真アップロード" />

      <div
        style={{
          height: "calc(100dvh - 56px)", // ←iPhone高さ問題を確実に回避
          overflow: "auto",              // ←必要なスクロールだけ許可
          padding: "20px",
          textAlign: "center",
          boxSizing: "border-box",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <p style={{ marginBottom: "20px", fontSize: "18px" }}>
          当日の写真をぜひアップロード<br />お願いいたします 📸
        </p>

        <a
          href={groomDriveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          👦 新郎側ゲストはこちら
        </a>

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
