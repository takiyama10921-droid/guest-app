import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>管理用ページ</h1>
      <p>テストリンク:</p>
      <Link to="/guest/login">Weddingページへ</Link>
      <br/>
      <Link to="/reception/TH01">Receptionページへ</Link><br/>
      <Link to="/messageList">MessageListページへ</Link>
    </div>
  );
}
