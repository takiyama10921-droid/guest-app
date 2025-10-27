export interface Guest {
  id: string;
  name: string;
  seatNumber: string;
  message: string;
}

export const guests: Guest[] = [
  { id: "abc123", name: "山田太郎", seatNumber: "5-12", message: "ご出席ありがとうございます！" },
  { id: "def456", name: "佐藤花子", seatNumber: "3-7", message: "素敵な一日をお過ごしください。" },
];
