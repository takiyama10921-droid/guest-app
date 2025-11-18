import { useNavigate } from "react-router-dom";
import seatingChart from "../assets/seating_chart.png"; // 席次表画像を用意
import { useGuest } from "../context/GuestContext";

function SeatingChartPage() {
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

      <h2 style={{ marginTop: "20px" }}>{guest.name} 様の席次表</h2>

      {/* 席次表の図 */}
      <img
        src={seatingChart}
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

export default SeatingChartPage;
