import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  addDoc,
  collection,
  Timestamp,
  // doc,
  // deleteDoc,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

type MessageType = {
  id: string;
  name: string;
  text: string;
  time: Timestamp | Date;
};

const MessagePage: React.FC = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [sentList, setSentList] = useState<MessageType[]>([]);

  // 名前読み込み
  useEffect(() => {
    const savedName = localStorage.getItem('guestName');
    if (savedName) setName(savedName);
  }, []);

  // Firestore 取得
  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('time', 'desc'), // 新しい順で取得
      limit(20) // ★ 20件に制限
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setSentList(
        snapshot.docs.map((doc) => {
          const data = doc.data() as { name: string; text: string; time: any };
          const time =
            data.time?.toDate instanceof Function
              ? data.time.toDate()
              : new Date(data.time.seconds * 1000);

          return {
            id: doc.id,
            name: data.name,
            text: data.text,
            time,
          };
        })
      );
    });
    return () => unsubscribe();
  }, []);

  // 送信処理
  const handleSubmit = async () => {
    if (!name || !text) return;

    const newMessage = { name, text, time: Timestamp.now() };

    try {
      const docRef = await addDoc(collection(db, 'messages'), newMessage);
      setSentList([
        ...sentList,
        { id: docRef.id, name, text, time: new Date() },
      ]);
      localStorage.setItem('guestName', name);
      setText('');
    } catch (err) {
      console.error('メッセージ送信失敗', err);
    }
  };

  // 削除
  // const handleDelete = async (id: string) => {
  //   const ok = window.confirm('本当に削除しますか？');
  //   if (!ok) return;

  //   try {
  //     await deleteDoc(doc(db, 'messages', id));
  //     setSentList(sentList.filter((msg) => msg.id !== id));
  //   } catch (err) {
  //     console.error('削除失敗', err);
  //   }
  // };

  // const toMillis = (t: Timestamp | Date) => {
  //   if (t instanceof Date) return t.getTime();
  //   if (t && typeof (t as any).toMillis === 'function')
  //     return (t as any).toMillis();
  //   if (t && typeof (t as any).toDate === 'function')
  //     return (t as any).toDate().getTime();
  //   return 0; // fallback（絶対に number を返す）
  // };
  return (
    <div style={{ paddingBottom: '40px', backgroundColor: '#ffe6f5' }}>
      <Header title=" メッセージ" />

      {/* --- 注意書き（固定） --- */}
      <div
        style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          maxWidth: '500px',
          background: '#FFF7E6',
          padding: '10px 14px',
          borderRadius: '10px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
          zIndex: 25,
          color: '#8A5B00',
          fontSize: '14px',
          textAlign: 'left',
          backgroundColor: '#ffe6f5'
        }}
      >
        新郎新婦に向けて、メッセージをお寄せください！<br />
        いただいたメッセージは後日、<br />
        二人で大切に読ませていただきます。<br />
        また、投稿前に下記のご確認をお願いします。<br />
        <br />
        ・お名前は、新郎新婦がわかる名前でお願いします。<br />
        ・公序良俗に反する投稿は控えてください。<br />
        ・<strong>Twitter</strong> 風のつぶやき投稿も大歓迎です。<br />
        ・投稿は複数回可能です。<br />
      </div>

      {/* --- フォーム固定 --- */}
      <div
        style={{
          position: 'fixed',
          top: '350px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          maxWidth: '500px',
          background: 'white',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          zIndex: 20,
          backgroundColor: '#ffe6f5'
        }}
      >
        <h3 style={{ marginTop: 0 }}>✏️ メッセージを書く</h3>

        <input
          type="text"
          placeholder="お名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '94%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <textarea
          placeholder="メッセージ"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: '94%',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            marginBottom: '10px',
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '12px',
            background: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          送信する
        </button>
      </div>

      {/* --- タイトル固定 --- */}
      {/* <div
        style={{
          position: 'fixed',
          top: '450px', // ← フォームの下に固定
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          maxWidth: '420px',
          background: 'white',
          padding: '8px 0',
          zIndex: 20,
          borderBottom: '1px solid #ddd',
          textAlign: 'left',
        }}
      >
        <h3 style={{ margin: 0 }}>📝 送信したメッセージ</h3>
      </div> */}

      {/* --- メッセージ一覧（スクロール） --- */}
      {/* <div
        style={{
          position: 'fixed',
          top: '490px', // ← タイトルの下
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          maxWidth: '420px',
          bottom: 0,
          overflowY: 'auto',
          paddingTop: '12px',
        }}
      >
        {[...sentList]
          .sort((a, b) => toMillis(b.time) - toMillis(a.time))
          .map((msg) => (
            <div
              key={msg.id}
              style={{
                background: '#FAFAFA',
                padding: '12px',
                borderRadius: '10px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                marginBottom: '14px',
                position: 'relative',
              }}
            >
              <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                {msg.name}
              </p>
              <p style={{ margin: '0 0 6px' }}>{msg.text}</p>

              <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
                {msg.time.toLocaleString('ja-JP')}
              </p>

              <button
                onClick={() => handleDelete(msg.id)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: '#FF4D4F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '2px 6px',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                削除
              </button>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default MessagePage;
