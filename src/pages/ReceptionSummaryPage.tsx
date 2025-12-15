import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

type Props = {
  side: "groom" | "bride";
};

export function ReceptionSummary({ side }: Props) {
  const [guests, setGuests] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      const q = query(
        collection(db, "guest"),
        where("side", "==", side)
      );
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<User, "id">),
      }));
      setGuests(list);
      setLoading(false);
    };

    fetchGuests();
  }, [side]);

  if (loading) return <p>読み込み中...</p>;

  const allCheckedIn = guests.every((g) => g.checkedin);

  return (
    <div>
      <h2>{side === "groom" ? "新郎側" : "新婦側"} 一覧</h2>

      {/* ⭐ 全員受付完了表示 */}
      {allCheckedIn ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ 全員受付完了
        </p>
      ) : (
        <p style={{ color: "red" }}>
          ❌ 未受付あり
        </p>
      )}

      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>受付</th>
            <th>ご祝儀</th>
            <th>お車代</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g) => (
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>{g.checkedin ? "✅" : "❌"}</td>
              <td>{g.giftReceivedBefore ? "💴" : "❌"}</td>
              <td>
                {!g.hasTransportationGift && "―"}
                {g.hasTransportationGift &&
                  (g.transportationGiftGiven ? "🚗" : "❌")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
