import ChatSearch from "../chatSearch/ChatSearch";
import CurrentUser from "../currentUser/CurrentUser";

export default function Chatleftbar() {
  return (
    <div className="w-1/3 h-full bg-slate-100">
      <div className="top">
        <CurrentUser />
      </div>
      <div className="leftBottom">
        <ChatSearch />
      </div>
    </div>
  );
}
