export default function ChatSearch() {
  return (
    <div className="container flex justify-center">
      <div className="container searchbox flex border-4 border-white py-2 rounded-xl space-x-3 mx-10 bg-white p-4">
        <div className="searchicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 opacity-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          className="bg-transparent outline-none placeholder:text-blue"
          type="text"
          placeholder="Search chats ..."
        />
      </div>
    </div>
  );
}
