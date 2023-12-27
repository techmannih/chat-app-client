import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookies } from "../../utils/APIs";

const receivedMsg = (msg) => {
  return (
    <div className="flex items-center justify-start text-white m-2">
      <div className="w-fit max-w-xl bg-gray-600 p-2 rounded-3xl">{msg}</div>
    </div>
  );
};

const sentMsg = (msg) => {
  return (
    <div className="flex items-center justify-end text-white m-2">
      <div className="w-fit max-w-xl bg-green-600 p-2 rounded-3xl">{msg}</div>
    </div>
  );
};

export default function ChatArea(props) {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  const getUserChats = async () => {
    // fetch user data from backend using axios
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URI}/chats/id/${id}`
    );
    setChatData(response.data);
    setUserId(
      chatData?.participants[0] === getCookies("userId")
        ? chatData?.participants[1]
        : chatData?.participants[0]
    );
  };

  const getUserProfileData = async () => {
    // fetch user data from backend using axios
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URI}/users/id/${getCookies("userId")}`
    );
    setUserData(response.data.data);
  };

  useEffect(() => {
    getUserChats();
    getUserProfileData();
  }, []);

  if (chatData === null || userData === null) {
    return (
      <div className="flex justify-center p-1 mt-14 text-xl">Loading...</div>
    );
  }

  return (
    <div className="w-full bg-slate-100 border-l-2 border-slate-200 min-h-full relative">
      {/* top - user details */}
      <div className="bg-white h-fit">
        <div className="flex items-center py-2 px-4">
          <div className="w-12 h-12 rounded-full bg-slate-200">
            <img
              className="w-12 h-12 rounded-full bg-slate-200"
              src={userData.profilePicUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col ml-2">
            <div className="font-bold ">{userData.fullname}</div>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-slate-200" />
      </div>
      {/* chat area */}
      <div
        className="flex flex-col-reverse overflow-y-scroll p-2"
        style={{ height: "90.5%" }}
      >
        <div className="msg-area">
          <div className="flex flex-col-reverse">
            {chatData.messages &&
              chatData.messages.map((msg) => {
                if (msg.senderId === userId) {
                  return receivedMsg(msg.message);
                } else {
                  return sentMsg(msg.message);
                }
              })}
          </div>
        </div>

        {/* send message area*/}
        <div className="sticky top-full bg-white w-full flex rounded-lg z-10">
          <input
            className="outline-none bg-transparent w-full text-lg px-4 rounded-md placeholder:text-sm"
            type="text"
            placeholder="Type message..."
          />
          <button className="bg-blue-800 text-white w-/3 rounded-full font-bold p-2 px-4 ">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
