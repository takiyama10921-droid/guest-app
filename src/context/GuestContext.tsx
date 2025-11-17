// src/context/GuestContext.tsx
import { createContext, useContext, useState } from "react";
import type { User } from "../types/User";

type GuestContextType = {
  guest: User | null;
  setGuest: (g: User | null) => void;
};

const GuestContext = createContext<GuestContextType>({
  guest: null,
  setGuest: () => {},
});

export const GuestProvider = ({ children }: { children: React.ReactNode }) => {
  const [guest, setGuest] = useState<User | null>(null);

  return (
    <GuestContext.Provider value={{ guest, setGuest }}>
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => useContext(GuestContext);
