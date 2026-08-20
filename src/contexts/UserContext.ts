import type { User } from "@/types/api";
import { createContext, type Dispatch, type SetStateAction } from "react";

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
