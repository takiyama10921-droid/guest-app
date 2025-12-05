import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import { useGuest } from "../context/GuestContext";
import Header from "../components/Header";
import { useEffect } from "react";

function MenuPage() {
  const { guest } = useGuest();
  const navigate = useNavigate();

  if (!guest) {
    navigate("/guest/login");
    return null;
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'auto'; // ページ離脱で戻す
    };
  }, []);
  return (
    <div
      style={{
        height: "100dvh",
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
          overflow: "hidden",
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
