import ChatSearch from "../chatSearch/ChatSearch";
import ChatUser from "../chatUser/ChatUser";
import CurrentUser from "../currentUser/CurrentUser";

export default function Chatleftbar() {
  return (
    <div className="w-1/3 h-full bg-slate-100 ">
      <div className="z-10">
        <CurrentUser />
      </div>
      <div>
        <ChatSearch />
      </div>
      <div className="leftUsers mt-5">
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
        <ChatUser/>
      </div>
    </div>
  );
}
