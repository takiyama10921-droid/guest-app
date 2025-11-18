import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png"; // メニュー画像を用意
import { useGuest } from "../context/GuestContext";

function MenuPage() {
  const { guest } = useGuest();
  const navigate = useNavigate();

  if (!guest) {
    navigate("/guest/login");
    return null;
  }
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      {/* 戻るボタン（左上固定） */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "8px 16px",
          borderRadius: "6px",
          backgroundColor: "#ccc",
          border: "none",
          cursor: "pointer",
          zIndex: 10000,
        }}
      >
        ← 戻る
      </button>

      <h2 style={{ marginTop: "20px" }}>メニュー</h2>

      {/* メニューの図 */}
      <img
        src={menu}
        alt="席次表"
        style={{
          marginTop: "20px",
          maxWidth: "90%",
          height: "auto",
          border: "2px solid #eee",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}

export default MenuPage;
