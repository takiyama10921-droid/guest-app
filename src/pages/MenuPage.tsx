import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.jpg";
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
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#ffdddd'
      }}
    >
      <Header title=" お食事" />

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '56px',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={menu}
          alt="メニュー"
          style={{
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
