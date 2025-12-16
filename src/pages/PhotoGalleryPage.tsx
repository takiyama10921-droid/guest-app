import React, { useEffect, useState } from "react";
import Header from "../components/Header";

type Photo = {
  thumb: string;
  full: string;
};

// ★ サムネ・フルをペアで定義
const photos: Photo[] = [
  {
    thumb: "/photos/thumb/IMG_6482.jpg",
    full: "/photos/full/IMG_6482.jpg",
  },
  {
    thumb: "/photos/thumb/IMG_6331.jpg",
    full: "/photos/full/IMG_6331.jpg",
  },
  {
    thumb: "/photos/thumb/IMG_6736.jpg",
    full: "/photos/full/IMG_6736.jpg",
  },
  {
    thumb: "/photos/thumb/IMG_6711.jpg",
    full: "/photos/full/IMG_6711.jpg",
  }
];

const PhotoGalleryPage: React.FC = () => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        height: "100dvh",
        overflow: "hidden",
        backgroundColor: "#f4e8ff",
      }}
    >
      <Header title=" 前撮りフォト" />

      {/* ギャラリー（サムネイル） */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "10px",
          marginTop: "56px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.thumb}
            alt=""
            loading="lazy" // ★ 遅延読み込み
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "12px",
              objectFit: "cover",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            onClick={() => setModalUrl(photo.full)}
          />
        ))}
      </div>

      {/* モーダル（高解像度） */}
      {modalUrl && (
        <div
          onClick={() => setModalUrl(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100dvh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          {/* 閉じるボタン */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalUrl(null);
            }}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              fontSize: "28px",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="閉じる"
          >
            ×
          </button>

          {/* 拡大画像 */}
          <img
            src={modalUrl}
            alt=""
            onClick={(e) => e.stopPropagation()}
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
