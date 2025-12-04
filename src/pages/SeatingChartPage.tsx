import { useNavigate } from "react-router-dom";
import seatingChart from "../assets/seating_chart.png"; // 席次表画像を用意
import { useGuest } from "../context/GuestContext";
import Header from "../components/Header";

function SeatingChartPage() {
  const { guest } = useGuest();
  const navigate = useNavigate();

  if (!guest) {
    navigate("/guest/login");
    return null;
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // ページ全体のスクロール禁止
      }}
    >
      <Header title=" 席次表" />

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '56px', // ヘッダー分
          boxSizing: 'border-box',
        }}
      >
        <img
          src={seatingChart}
          alt="席次表"
          style={{
            maxWidth: '90%',
            borderRadius: '12px',
            border: '2px solid #eee',
          }}
        />
      </div>
    </div>
  );
}

export default SeatingChartPage;
