import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import { useGuest } from "../context/GuestContext";
import Header from "../components/Header";
import { useEffect } from "react";
import usePageScrollLock from "../hooks/usePageScrollLock";

function MenuPage() {
  const { guest } = useGuest();
  const navigate = useNavigate();

  // ★これだけで十分。body の overflow 制御は絶対に二重で書かない
  usePageScrollLock(true);

  if (!guest) {
    navigate("/guest/login");
    return null;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        position: "fixed",     // ★画面を固定
        inset: 0,              // ★上下左右すべて 0
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      <Header title=" お食事" />

      <div
        style={{
          flex: 1,
          padding: "20px",
          paddingTop: "56px",
          textAlign: "center",
          boxSizing: "border-box",
          overflow: "hidden",
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
