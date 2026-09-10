"use client";

import type { User } from "@/types/api";
import { useEffect, useState, type ReactNode } from "react";
import UserContext from "./UserContext";

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [hasLoadedUser, setHasLoadedUser] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setHasLoadedUser(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedUser) return;
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user, hasLoadedUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
