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
        marginTop: "56px",
        overflow: "hidden",
      }}
    >
      <Header title=" お食事" />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <img
          src={menu}
          alt="メニュー"
          style={{
            marginTop: '20px',
            maxWidth: '90%',
            height: 'auto',
            border: '2px solid #eee',
            borderRadius: '12px',
          }}
        />
      </div>
    </div>
  );
}

export default MenuPage;
