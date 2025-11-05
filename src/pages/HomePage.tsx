import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>結婚式ゲスト用ページ</h1>
      <p>本日はお越しいただきありがとうございます！</p>
      <p>テストリンク:</p>
      <Link to="/guest/login">Weddingページへ</Link>
      <Link to="/reception/TH01">Receptionページへ</Link>
    </div>
  );
}
