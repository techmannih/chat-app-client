import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatArea from "../chatArea/chatArea";
import ChatBlank from "../chatBlank/ChatBlank";
import { Profile } from "../profile/Profile";
import { useEffect, useState } from "react";
import { getCookies } from "../../utils/APIs";
import axios from "axios";

export default function Chatmain() {
  const [userData, setUserData] = useState(null);

  const getUserProfileData = async () => {
    // fetch user data from backend using axios
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URI}/users/id/${getCookies("userId")}`
    );
    setUserData(response.data.data);
  };

  useEffect(() => {
    if (getCookies("userId") === "null") {
      window.location.href = "/";
    }
    getUserProfileData();
  }, []);

  if (userData === null) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="w-screen flex h-full">
      <Routes>
        <Route path="/" element={<ChatBlank />} />
        <Route path="/profile/:id" element={<Profile userData={userData} />} />
        <Route path="/chat/:id" element={<ChatArea />} />
      </Routes>
    </div>
  );
}
