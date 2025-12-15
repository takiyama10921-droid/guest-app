import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "50px auto 0",  // ← 横中央にする設定
        width: "fit-content",    // ← 必須：内容幅に合わせて中央に寄せる
      }}
    >
      <h1>管理用ページ</h1>
      <p>テストリンク:</p>
      <Link to="/guest/login">Weddingページへ</Link>
      <br />
      {/* 仮でTH01の人のReceptionページへ遷移 */}
      <Link to="/reception/TH01">Th01のゲストのReceptionページへ</Link>
      <br />
      <Link to="/messageList">MessageListページへ</Link>
      <br />
      <Link to="/groomSummary">新郎ゲストListページへ</Link>
      <br />
      <Link to="/brideSummary">新婦ゲストListページへ</Link>
    </div>
  );
}
