export default function Profile() {
    return (
        <div className="w-full h-full">
            <div className="mt-20">
                <div className="flex justify-center">
                    <div className="w-60 h-60 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex justify-center mt-6">
                    <div className="text-center">
                        <h1 className="text-4xl text-black font-extrabold">Name</h1>
                    </div>
                </div>
            </div>
            <div className="flex mt-4 justify-center">
                <div className="w-3/5 h-0.5 bg-blue-500"></div>
            </div>
            <div className="flex justify-center mt-12 text-violet-800">
                <div className="flex justify-center w-full text-violet-800">
                    <div className="w-1/2 text-xl">
                        <div className="flex justify-between">
                            <div className="font-bold">Email</div>
                            <div className="font-bold">mailId</div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="font-bold">Address</div>
                            <div className="font-bold">address</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <div className="w-1/2">
                    <div className="flex justify-between">
                        <div className="text-xl font-extrabold bg-red-600 text-white hover:bg-red-500 p-2 rounded-md cursor-pointer">Delete Account</div>
                        <div className="text-xl font-extrabold bg-blue-700 p-2 text-white rounded-md cursor-pointer hover:bg-blue-500">Logout</div>
                    </div>
                </div>
            </div>  
        </div>
    )
}