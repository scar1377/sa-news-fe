"use client";

import useUser from "@/contexts/useUser";
import type { User } from "@/types/api";
import { getUsers } from "@/utils/api";
import { type ChangeEvent, useState } from "react";

const Login = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser();

  const handleClick = async () => {
    setIsOpen(true);
    const res = await getUsers();
    if (!res.ok) {
      return;
    }
    console.log(res.users, "<<<<<<<<,users");
    setUsers(res.users);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentUser = users.find((user) => user.username === e.target.value);
    if (currentUser) setUser(currentUser);
  };

  return (
    <>
      {isOpen ? (
        <select onChange={handleChange} defaultValue="placeholder">
          <option disabled value="placeholder">
            Chose login user
          </option>
          {users.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
      ) : (
        <button onClick={handleClick}>
          {user?.username ? "Log out" : "Log in"}
        </button>
      )}
    </>
  );
};

export default Login;
