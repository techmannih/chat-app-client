import ChatArea from "../chatArea/chatArea";
import Chatleftbar from "../chatLeftSection/Chatleftbar";

export default function Chatmain() {
  return (
    <div
      className="
      w-screen
      flex
      h-full">
      <Chatleftbar />
      <ChatArea />
    </div>
  );
}
