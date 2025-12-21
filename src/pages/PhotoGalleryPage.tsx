import React, { useEffect, useState } from "react";
import Header from "../components/Header";

type Photo = {
  thumb: string;
  full: string;
};

const photos: Photo[] = [
  { thumb: "/photos/thumb/IMG_6482.jpg", full: "/photos/full/IMG_6482.jpg" },
  { thumb: "/photos/thumb/IMG_6331.jpg", full: "/photos/full/IMG_6331.jpg" },
  { thumb: "/photos/thumb/IMG_6736.jpg", full: "/photos/full/IMG_6736.jpg" },
  { thumb: "/photos/thumb/IMG_6711.jpg", full: "/photos/full/IMG_6711.jpg" },
  { thumb: "/photos/thumb/IMG_6676.jpg", full: "/photos/full/IMG_6676.jpg" },
  { thumb: "/photos/thumb/IMG_6682.jpg", full: "/photos/full/IMG_6682.jpg" },
  { thumb: "/photos/thumb/IMG_6685.jpg", full: "/photos/full/IMG_6685.jpg" },
  { thumb: "/photos/thumb/IMG_6706.jpg", full: "/photos/full/IMG_6706.jpg" },
  { thumb: "/photos/thumb/IMG_6679.jpg", full: "/photos/full/IMG_6679.jpg" },
];

const PhotoGalleryPage: React.FC = () => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ★ 戻るボタン対策
  useEffect(() => {
    const handlePopState = () => {
      if (modalUrl) {
        setModalUrl(null); // モーダルだけ閉じる
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [modalUrl]);

  const openModal = (url: string) => {
    // ★ モーダル用に履歴を1つ積む
    window.history.pushState({ modal: true }, "");
    setModalUrl(url);
  };

  const closeModal = () => {
    setModalUrl(null);
    // ★ モーダル用に積んだ履歴を戻す
    if (window.history.state?.modal) {
      window.history.back();
    }
  };

  return (
    <div style={{ height: "100dvh", overflow: "hidden", backgroundColor: "#f4e8ff" }}>
      <Header title=" 前撮りフォト" />

      {/* ギャラリー */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          maxWidth: "600px",
          margin: "56px auto 0",
          padding: "10px",
          overflowY: "auto",
        }}
      >
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.thumb}
            loading="lazy"
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "12px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => openModal(photo.full)}
          />
        ))}
      </div>

      {/* モーダル */}
      {modalUrl && (
        <div
          onClick={closeModal}
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
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
          >
            ×
          </button>

          <img
            src={modalUrl}
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
