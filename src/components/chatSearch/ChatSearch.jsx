import axios from "axios";
import { useState } from "react";
import { getCookies } from "../../utils/APIs";
import { nanoid } from "nanoid";

export default function ChatSearch() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getUsers(val) {
    setQuery(val);
    if (val === "") {
      setData(null);
      return;
    }
    // fetch user data from backend using axios
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URI}/users/search/${val}/${getCookies(
        "userId"
      )}`
    );
    setData(response.data.data);
  }

  async function addChat(userId) {
    setIsLoading(true);
    // fetch user data from backend using axios
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URI}/chats/create`,
        {
          chatId: nanoid(),
          receiverId: userId,
          senderId: getCookies("userId"),
        }
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  return (
    <div className="container flex justify-center relative">
      <div className="container searchbox flex border-4 border-white py-2 rounded-xl space-x-3 mx-10 bg-white p-4">
        <div className="searchicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 opacity-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          className="bg-transparent outline-none placeholder:text-blue w-full"
          type="text"
          placeholder="Search chats ..."
          spellCheck={false}
          value={query}
          onChange={(e) => getUsers(e.target.value)}
        />
      </div>
      {/* a dropdown list of searched users */}
      {data === null || data.length === 0 ? null : (
        <div className="absolute top-11 overflow-y-scroll h-32 container flex flex-col space-y-2 bg-white rounded-xl border-4 border-white py-2 mx-10 justify-center items-center w-4/5">
          {data.map((user) => {
            return (
              <div
                className="flex flex-row space-x-2 items-center"
                key={user._id}
              >
                <div className="flex flex-row space-x-2 items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.profilePicUrl}
                    alt="profile"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-semibold">{user.name}</div>
                    <div className="text-sm text-black">@{user.username}</div>
                  </div>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => addChat(user.userId)}
                >
                  {isLoading ? "Adding..." : "Add"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
