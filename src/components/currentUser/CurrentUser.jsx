export default function CurrentUser({userData}) {
  return (
    <div className="p-2">
      <div className="m-2 flex content-center justify-center p-5">
        <img
          className="rounded-full w-20 h-20"
          src={userData.profilePicUrl}
          alt=""
        />
        <div className="container ml-10 flex flex-col justify-center content-center">
          <h1 className="text-2xl font-bold text-gray-800">{userData.fullname}</h1>
          <p className="text-gray-600">@{userData.username}</p>
        </div>
        <div>
          <div className="w-10 h-10 cursor-pointer flex flex-wrap content-center justify-center rounded-full hover:border-white hover:border-2 hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
