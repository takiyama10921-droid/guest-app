import React from "react";
import Header from "../components/Header"; // さっき作った共通ヘッダー
import mapImage from "../assets/img_access01.jpg"; // 会場MAP画像（適宜差し替え）

const VenueMapPage: React.FC = () => {
  return (
    <div style={{ paddingTop: "80px" }}> {/* ← ヘッダー固定ぶん余白 */}

      {/* 共通ヘッダー */}
      <Header title="🏛 会場MAP" />

      {/* コンテンツ本体 */}
      <div
        style={{
          width: "90%",
          maxWidth: "430px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          textAlign: "left",
        }}
      >
        <h3 style={{ marginTop: 0 }}>🔍 会場配置図</h3>
        <p style={{ margin: "4px 0 12px", color: "#555" }}>
          受付・披露宴会場・控室などの位置関係をご確認ください。
        </p>

        {/* 画像（幅を画面に合わせてリサイズ） */}
        <img
          src={mapImage}
          alt="会場MAP"
          style={{
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        />

        <p style={{ marginTop: "12px", color: "#666", fontSize: "14px" }}>
          ※ ご不明な点があれば、お近くのスタッフへお声がけください。
        </p>
      </div>
    </div>
  );
};

export default VenueMapPage;
