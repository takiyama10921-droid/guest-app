import React, { useEffect } from "react";
import Header from "../components/Header";
import mapImage from "../assets/map.jpg";

const VenueMapPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // ★ 全体スクロール禁止
        backgroundColor: "#e3f0ff",
      }}
    >
      {/* ヘッダー */}
      <Header title=" 会場MAP" />

      {/* コンテンツ（スクロールさせない） */}
      <div
        style={{
          flex: 1,
          paddingTop: "76px", // ヘッダー分
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "430px",
            background: "#fff",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            boxSizing: "border-box",
          }}
        >
          <h3 style={{ marginTop: 0 }}>🔍 会場地図</h3>

          <img
            src={mapImage}
            alt="会場MAP"
            style={{
              width: "100%",
              maxHeight: "calc(100dvh - 200px)", // ★ 画面内に必ず収める
              objectFit: "contain",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <p style={{ marginTop: "8px", color: "#666", fontSize: "14px" }}>
            ※ ご不明な点があれば、お近くのスタッフへお声がけください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default VenueMapPage;
