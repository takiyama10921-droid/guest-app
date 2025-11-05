export interface User {
  id?: string;  // FirestoreのドキュメントID
  name: string;
  seatNumber: number;
  message: string;
  code: string;
  checkedin: boolean;
  //お車代
  hasTransportationGift: boolean;
  //ご祝儀事前受取済みか
  giftReceivedBefore: boolean;
}
