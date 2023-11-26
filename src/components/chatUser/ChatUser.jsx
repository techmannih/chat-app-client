export default function ChatUser() {
  return (
    <div className="container flex p-4 hover:bg-slate-200 cursor-pointer mb-2">
      {/* profile pic */}
      <div className="w-20 h-20">
        <img
          className="w-16 h-16 rounded-full"
          src="/src/assets/img/profile.jpg"
          alt=""
        />
      </div>
      <div className="container ml-4">
        {/* name and time */}
        <div className="flex overflow-hidden content-center justify-between">
          <div className="text-blue-800 text-lg font-bold">User Fullname</div>
          <div>10:32 AM</div>
        </div>
        {/* messages and  notification */}
        <div className="flex">
          <div className="container">
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              perferendis! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Ex, cumque facilis minus vitae illum corporis sit esse iure
              ullam eos!
            </p>
          </div>
          <div className="bg-blue-500 rounded-full w-7 h-7 relative">
            <span className="absolute left-2 top-1">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
