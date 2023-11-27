import ChatUser from "../chatUser/ChatUser";

export default function ChatArea() {
    return (
        <div className="w-2/3 bg-slate-100 border-l-2 border-slate-200 h-screen">
            {/* top - user details */}
            <div className="bg-white h-fit">
                <div className="flex items-center py-2 px-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                    <div className="flex flex-col ml-2">
                        <div className="font-bold ">User Name</div>
                        <div className="text-sm text-slate-400">Last seen at 12:00 PM</div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="border-slate-200" />
            </div>
            {/* chat area */}
            <div className="bg-red-300">

                {/* send message */}
                <div className="fixed bottom-0 bg-white w-2/3 flex rounded-lg z-20">
                    <input className="outline-none bg-transparent w-full text-lg px-4 rounded-md placeholder:text-sm" type="text" placeholder="Type message..." />
                    <button className="bg-blue-800 text-white w-/3 rounded-full font-bold p-2 px-4 ">Send</button>
                </div>
            </div>
        </div>
    )
}