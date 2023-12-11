import { useState } from "react";
import Chatmain from "./components/chatmain/Chatmain";
import { useEffect } from "react";
import { getCookies } from "./utils/APIs";
import Authenticate from "./components/authentication/Authentication";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userIdValue = getCookies("userId");
    if (userIdValue !== 'null') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <div className="font-montserrat h-screen overflow-hidden">
        {!isLoggedIn && <Authenticate isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        {isLoggedIn && <Chatmain />}
      </div>
    </>
  );
}