import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import type { User } from "../types/User"; 

// コレクション全件取得
export async function fetchUsers(): Promise<User[]> {
  const querySnapshot = await getDocs(collection(db, "guest"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<User, "id">)
  }));
}

// 特定ドキュメント取得
export async function fetchUser(docId: string): Promise<User | null> {
  const docRef = doc(db, "guest", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...(docSnap.data() as Omit<User, "id">) };
  } else {
    return null;
  }
}

/**
 * チェックイン状態を更新する
 * @param userId FirestoreのドキュメントID
 * @param checkedin 更新後の状態（true/false）
 */
export async function updateCheckinStatus(userId: string, checkedin: boolean): Promise<void> {
  const userRef = doc(db, "guest", userId); 
  await updateDoc(userRef, { checkedin });
}