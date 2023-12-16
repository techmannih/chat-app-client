import { useParams } from "react-router-dom";
import ChatUser from "../chatUser/ChatUser";
import { useEffect, useState } from "react";

export default function ChatArea(props) {

    const { id } = useParams();
    const [chatData, setChatData] = useState(null);

    const getUserProfileData = async () => {
        // fetch user data from backend using axios
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URI}/chats/id/${id}`);
        setChatData(response.data);
    }

    useEffect(()=>{
        // getUserProfileData();
    }, [])

    if(chatData === null) {
        return (
            <div className="">Loading...</div>
        )
    }

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
            <div className="flex flex-col-reverse overflow-y-scroll p-2" style={{ height: "90.5%", }}>
                <div className="">
                    <div className="flex items-center justify-start text-white m-2">
                        <div className="w-fit max-w-xl bg-gray-600 p-2 rounded-3xl">
                            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et, necessitatibus odit, quam fugit in deleniti corporis molestias totam nobis libero non consequatur.
                        </div>
                    </div>
                    <div className="flex items-center justify-end text-white m-2">
                        <div className="w-fit max-w-xl bg-green-600 p-2 rounded-3xl">
                            Hello llorem23

                        </div>
                    </div>

                    <div className="flex items-center justify-end text-white m-2">
                        <div className="w-fit max-w-xl bg-green-600 p-2 rounded-3xl">
                            Hello llorem23jdfjkgndf
                        </div>
                    </div>

                </div>

                {/* send message area*/}
                <div className="fixed bottom-0 bg-white w-2/3 flex rounded-lg -ml-2 z-10">
                    <input className="outline-none bg-transparent w-full text-lg px-4 rounded-md placeholder:text-sm" type="text" placeholder="Type message..." />
                    <button className="bg-blue-800 text-white w-/3 rounded-full font-bold p-2 px-4 ">Send</button>
                </div>
            </div>
        </div>
    )
}