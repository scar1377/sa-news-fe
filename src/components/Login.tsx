"use client";

import useUser from "@/contexts/useUser";
import type { User } from "@/types/api";
import { getUsers } from "@/utils/api";
import { type ChangeEvent, useState } from "react";

const Login = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showUserPicker, setShowUserPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { user, setUser } = useUser();

  const handleClick = async () => {
    if (user) {
      setShowUserPicker(false);
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
      setShowUserPicker(true);
      setError("");

      setIsLoading(false);
      setUsers(res.users);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentUser = users.find((user) => user.username === e.target.value);
    if (currentUser) {
      setUser(currentUser);
      setShowUserPicker(false);
    }
  };

  return (
    <>
      {user ? (
        <div className="flex items-center gap-3">
          <img
            src={user.avatar_url}
            className="border-3 border-blue-900 w-8 h-8 rounded-full object-cover"
            alt={`${user.username}'s avatar`}
          />
          <span>{user.username}</span>
          <button
            onClick={handleClick}
            className="border-2 border-orange-200 bg-white text-orange-400 px-4 py-2 rounded-md hover:border-orange-300 hover:bg-orange-50 cursor-pointer transition duration-200 active:translate-y-0.5 active:translate-x-0.5"
          >
            Log out
          </button>
        </div>
      ) : (
        <>
          {showUserPicker ? (
            <div className="flex items-center gap-2">
              <span className="mr-2 text-sm font-medium">Login as:</span>
              <select
                onChange={handleChange}
                defaultValue="placeholder"
                className="rounded-md border border-orange-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              >
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
            </div>
          ) : (
            <>
              <button
                onClick={handleClick}
                disabled={isLoading}
                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 cursor-pointer transition duration-200 active:translate-y-0.5 active:translate-x-0.5"
              >
                {isLoading ? "loading..." : "Login"}
              </button>
              {error && <p>{error}</p>}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Login;
