import ChatSearch from "../chatSearch/ChatSearch";
import ChatUser from "../chatUser/ChatUser";
import CurrentUser from "../currentUser/CurrentUser";

export default function Chatleftbar({ userData, chatsList }) {
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
        {
          chatsList.chats.length === 0 ? <div className="flex justify-center p-1 mt-14 text-xl">Add users...</div>
            : chatsList.chats.map((chat) => {
              return (
                <div className="flex justify-center text-xl" key={chat._id}>
                  <ChatUser chat={chat} />
                </div>
              );
            })
        }
      </div>
    </div>
  );
}
