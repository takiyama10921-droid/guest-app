import React from "react";
import Header from "../components/Header";

const schedule = [
  { time: "12:00", event: "受付開始" },
  { time: "12:45", event: "披露宴開宴" },
  { time: "13:00", event: "新郎新婦入場・ウェルカムスピーチ" },
  { time: "13:15", event: "乾杯" },
  { time: "13:30", event: "ケーキ入刀・写真撮影" },
  { time: "14:00", event: "歓談・余興" },
  { time: "15:30", event: "新郎新婦挨拶・退場" },
];

const TimelinePage: React.FC = () => {

  return (
    <div>
      <Header title="🕒 タイムスケジュール" />
      {/* タイムライン */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {schedule.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '90%',
              maxWidth: '400px',
            }}
          >
            {/* 左の丸アイコン */}
            <div
              style={{
                minWidth: '40px',
                minHeight: '40px',
                borderRadius: '50%',
                backgroundColor: '#4F46E5',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
                flexShrink: 0,
              }}
            >
              {index + 1}
            </div>
            {/* イベント内容 */}
            <div style={{ textAlign: 'left' }}>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
                {item.time}
              </p>
              <p style={{ margin: 0, fontSize: '16px', fontWeight: 500 }}>
                {item.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
