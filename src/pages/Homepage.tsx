import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>結婚式ゲスト用ページ</h1>
      <p>招待状のQRコードを読み取ると、個別ページが開きます!</p>
      <p>テストリンク:</p>
      <Link to="/guest/abc123">山田太郎のページへ</Link>
    </div>
  );
}
