import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png"; // メニュー画像を用意
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
    <div>
      <Header title="メニュー" />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* メニューの図 */}
        <img
          src={menu}
          alt="席次表"
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
