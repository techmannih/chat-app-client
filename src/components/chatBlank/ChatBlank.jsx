export default function ChatBlank() {
    return (
        <>
            <div className="w-full h-full">
                <div className="flex items-center justify-center h-full">
                    <div className="">
                        <img className="w-80 h-80" src="src/assets/img/start.gif" alt="" />
                        <div className="text-xl font-bold text-blue-500">Select a chat to start messaging</div>
                    </div>
                </div>
            </div>
        </>
    )
}