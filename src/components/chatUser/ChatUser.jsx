import { useEffect, useState } from "react";
import { getCookies, getTime } from "../../utils/APIs";
import axios from "axios";

export default function ChatUser({chat}) {

  const [userData, setUserData] = useState(null);

  const getUserData = async (userId) => {
    // fetch user data from backend using axios
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/users/id/${userId}`);
    setUserData(response.data.data);
  }

  useEffect(() => {
    if(chat === null) {
      return;
    }
    if(chat.participants.senderId === getCookies("userId")) {
      getUserData(chat.participants.receiverId);
    }
    else{
      getUserData(chat.participants.senderId);
    }
  }, []);

  if(userData === null) {
    return (
      <div className="">Loading...</div>
    )
  }

  return (
    <div className="container flex p-4 hover:bg-slate-200 cursor-pointer mb-2">
      {/* profile pic */}
      <div className="w-20 h-20">
        <img
          className="w-16 h-16 rounded-full"
          src={userData.profilePicUrl}
          alt=""
        />
      </div>
      <div className="container ml-4">
        {/* name and time */}
        <div className="flex overflow-hidden content-center justify-between">
          <div className="text-blue-800 text-lg font-bold">{userData.fullname}</div>
          <div className="text-sm">{getTime(userData.updatedAt)}</div>
        </div>
        {/* messages and  notification */}
        <div className="flex">
          <div className="container">
            <p className="line-clamp-2">
              {chat.messages.length === 0 ? "Say hii..." : chat.last_message}
            </p>
          </div>
          {/* <div className="bg-blue-500 rounded-full w-7 h-7 relative">
            <span className="absolute left-2 top-1">3</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
