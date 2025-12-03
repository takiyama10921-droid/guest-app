import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

type Message = {
  id: string;
  name: string;
  text: string;
  time: string;
};

const MessageListPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time", "desc")); // 最新順

    const unsub = onSnapshot(q, (snapshot) => {
      const list: Message[] = snapshot.docs.map((doc) => {
        const data = doc.data();

        let timeString = "";
        if (data.time?.seconds) {
          timeString = new Date(data.time.seconds * 1000).toLocaleString("ja-JP");
        } else {
          timeString = data.time;
        }

        return {
          id: doc.id,
          name: data.name,
          text: data.text,
          time: timeString,
        };
      });

      setMessages(list);
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <Header title="📚 ゲストメッセージ一覧" />

      <div
        style={{
          width: "95%",
          margin: "80px auto 0",
          paddingBottom: "60px",
        }}
      >
        {/* タイトル中央 */}
        <h3 style={{ marginBottom: "24px", textAlign: "center" }}>📝 全メッセージ</h3>

        {messages.length === 0 && (
          <p style={{ color: "#777", textAlign: "center" }}>まだメッセージはありません。</p>
        )}

        {/* 横並びで折り返す */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                background: "#FFFFFF",
                padding: "12px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                width: "200px", // 横幅固定
                boxSizing: "border-box",
              }}
            >
              <p style={{ fontWeight: "bold", margin: "0 0 6px" }}>{msg.name}</p>
              <p style={{ margin: "0 0 8px", color: "#444" }}>{msg.text}</p>
              <p style={{ color: "#999", fontSize: "12px", margin: 0 }}>{msg.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageListPage;
