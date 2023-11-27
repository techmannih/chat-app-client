import Chatmain from "./components/chatmain/Chatmain";
import CurrentUser from "./components/currentUser/CurrentUser";

export default function App() {
  return (
    <>
      <div
        className="
          font-montserrat 
          h-screen
          overflow-hidden"
      >
        <Chatmain />
      </div>
    </>
  );
}
