import { useEffect, useState } from "react";
import ChatSearch from "../chatSearch/ChatSearch";
import ChatUser from "../chatUser/ChatUser";
import CurrentUser from "../currentUser/CurrentUser";
import axios from "axios";
import { getCookies } from "../../utils/APIs";

export default function Chatleftbar() {
  const [userData, setUserData] = useState(null);
  const [chatsList, setChatsList] = useState(null);

  const handleGetChatArea = (chatId) => {
    window.location.href = `${chatId}`;
  };

  const getUserProfileData = async () => {
    // fetch user data from backend using axios
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URI}/users/id/${getCookies("userId")}`
    );
    setUserData(response.data.data);
  };

  const getChatsList = async () => {
    // fetch user data from backend using axios
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URI}/chats`
    );
    setChatsList(response.data);
  };

  useEffect(() => {
    getUserProfileData();
    getChatsList();
  }, []);

  if (!userData || !chatsList) {
    return (
      <div className="w-1/3 h-full bg-slate-100 overflow-hidden">
        <div className="flex justify-center p-1 mt-14 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-1/3 h-full bg-slate-100 overflow-hidden">
      <div className="z-10">
        <CurrentUser userData={userData} />
      </div>
      <div>
        <ChatSearch />
      </div>
      <div className="mt-4">
        <hr className="border-slate-200" />
      </div>
      <div className="overflow-scroll h-full">
        {chatsList.chats.length === 0 ? (
          <div className="flex justify-center p-1 mt-14 text-xl">
            Add users...
          </div>
        ) : (
          chatsList.chats.map((chat) => {
            return (
              <div
                className="flex justify-center text-xl"
                key={chat._id}
                onClick={() => handleGetChatArea(chat._id)}
              >
                <ChatUser chat={chat} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
