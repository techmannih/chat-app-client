import ChatSearch from "../chatSearch/ChatSearch";
import ChatUser from "../chatUser/ChatUser";
import CurrentUser from "../currentUser/CurrentUser";

export default function Chatleftbar() {
  return (
    <div className="w-2/5 h-full bg-slate-100 overflow-hidden">
      <div className="z-10">
        <CurrentUser />
      </div>
      <div>
        <ChatSearch />
      </div>
      <div className="mt-4">
        <hr className="border-slate-200" />
      </div>
      <div className="leftUsers overflow-scroll h-full">
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
      </div>
    </div>
  );
}
