export default function Profile() {
    return (
        <div className="w-full h-full">
            <div className="mt-20">
                <div className="flex justify-center">
                    <div className="w-60 h-60 rounded-full bg-gray-500"></div>
                </div>
                <div className="flex justify-center mt-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-lime-500">Name</h1>
                    </div>
                </div>
            </div>
            <div className="flex mt-4 justify-center">
                <div className="w-2/3 h-0.5 bg-blue-500"></div>
            </div>
            <div className="flex justify-center mt-12 text-violet-800">
                <div className="flex justify-center w-full text-violet-800">
                    <div className="w-1/2 text-xl border-2">
                        <div className="flex justify-between">
                            <div className="font-bold">Email</div>
                            <div className="font-bold">mailId</div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="font-bold">Phone</div>
                            <div className="font-bold">phone</div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="font-bold">Address</div>
                            <div className="font-bold">address</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}