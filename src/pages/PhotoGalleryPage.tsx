import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ローカル写真フォルダの画像
const photoLinks = [
  "/photos/IMG_6482.jpg",
  "/photos/m4BOCvyqQ5apQPqzuOq09Q.jpg",
];

const PhotoGalleryPage: React.FC = () => {
  const navigate = useNavigate();

  const [modalUrl, setModalUrl] = useState<string | null>(null);

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      {/* 戻る */}
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

      <h2 style={{ marginBottom: "20px" }}>📸 写真ギャラリー</h2>

      {/* ギャラリー */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {photoLinks.map((url, i) => (
          <img
            key={i}
            src={url}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "12px",
              objectFit: "cover",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            onClick={() => setModalUrl(url)}
          />
        ))}
      </div>

      {/* モーダル */}
      {modalUrl && (
        <div
          onClick={() => setModalUrl(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={modalUrl}
            alt=""
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGalleryPage;
