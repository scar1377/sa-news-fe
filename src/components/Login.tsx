"use client";

import useUser from "@/contexts/useUser";
import type { User } from "@/types/api";
import { getUsers } from "@/utils/api";
import { type ChangeEvent, useState } from "react";

const Login = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { user, setUser } = useUser();

  const handleClick = async () => {
    if (user) {
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
    } else {
      setIsLoading(true);
      setError("");
      const res = await getUsers();
      if (!res.ok) {
        setError("Oops, something went wrong... Try again later.");
        setIsLoading(false);
        return;
      }
      setIsLoggedIn(true);
      setError("");

      setIsLoading(false);
      setUsers(res.users);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentUser = users.find((user) => user.username === e.target.value);
    if (currentUser) {
      setUser(currentUser);
      setIsLoggedIn(false);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <span>Login as:</span>
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
        </>
      ) : user ? (
        <>
          <img src={user?.avatar_url} style={{ width: 25, height: 25 }} />
          <span>{user?.username}</span>
          <button onClick={handleClick}>Log out</button>
        </>
      ) : (
        <>
          <button onClick={handleClick}>
            {isLoading ? "loading..." : "Login"}
          </button>
          {error && <p>{error}</p>}
        </>
      )}
    </>
  );
};

export default Login;
