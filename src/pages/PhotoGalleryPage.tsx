import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const photoLinks = [
  "/photos/IMG_6482.jpg",
  "/photos/m4BOCvyqQ5apQPqzuOq09Q.jpg",
  "/photos/IMG_6331.jpg",
  "/photos/IMG_6736.png",
  "/photos/IMG_6711.png",
];

const PhotoGalleryPage: React.FC = () => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        position: "fixed",  // ←画面を固定してスクロール禁止
        inset: 0,           // ←上下左右0指定
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <Header title=" 前撮りフォト" />

      {/* ギャラリー（中だけスクロール） */}
      <div
        style={{
          height: "calc(100dvh - 56px)", // ←ヘッダー分を除いた高さ
          overflowY: "auto",
          overflowX: "hidden",
          padding: "10px",
          margin: "56px auto 0 auto",
          width: "100%",
          maxWidth: "600px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {photoLinks.map((url, i) => (
          <img
            key={i}
            src={url}
            alt=""
            style={{
              width: "100%",
              aspectRatio: "1/1",
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
            inset: 0,
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
