import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import { useGuest } from "../context/GuestContext";
import Header from "../components/Header";

function MenuPage() {
  const { guest } = useGuest();
  const navigate = useNavigate();

  if (!guest) {
    navigate("/guest/login");
    return null;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",  // ← 全体のスクロール禁止
      }}
    >
      <Header title=" お食事" />

      {/* メインエリアだけスクロール許可 */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          paddingTop: "56px", // ← ヘッダー分のスペース
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <img
          src={menu}
          alt="メニュー"
          style={{
            marginTop: "20px",
            maxWidth: "90%",
            height: "auto",
            border: "2px solid #eee",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
}

export default MenuPage;
