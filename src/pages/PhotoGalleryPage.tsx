import React, { useEffect, useState } from "react";
import Header from "../components/Header";

// ローカル写真フォルダの画像
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
        height: '100dvh',
        overflow: 'hidden',
      }}
    >
      <Header title=" 前撮りフォト" />
      {/* ギャラリー */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '10px', // ← 余白は内側にして安全に
          marginTop: '56px',
          boxSizing: 'border-box', // ★ 横幅オーバー防止
          overflowX: 'hidden',
          overflowY: "auto", 
        }}
      >
        {photoLinks.map((url, i) => (
          <img
            key={i}
            src={url}
            alt=""
            style={{
              width: '100%', // ★ grid の 1fr に合わせる
              aspectRatio: '1/1', // ★ 正方形にする
              borderRadius: '12px',
              objectFit: 'cover',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
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
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100dvh',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <img
            src={modalUrl}
            alt=""
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '12px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGalleryPage;
