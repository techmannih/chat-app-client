import { useEffect, useState } from "react";
import { getCookies, removeCookies } from "../../utils/APIs";
import axios from "axios";

export function Profile({userData}) {

    const handleLogout = () => {
        removeCookies("userId");
        window.location.href = "/auth";
    }

    const deleteAccount = async () => {
        // fetch user data from backend using axios
        const response = await axios.delete(`${import.meta.env.SERVER_URI}/users/delete/${getCookies("userId")}`);
        console.log(response);
    }

    useEffect(() => {
        if (getCookies("userId") === 'null') {
            window.location.href = "/";
        }
    }, [])

    if (userData === null) {
        return (
            <div className="">Loading...</div>
        )
    }

    return (
        <div className="w-full h-full">
            <div className="mt-20">
                <div className="flex justify-center">
                    <div className="w-60 h-60 rounded-full bg-gray-300">
                        <img className="w-full rounded-full" src={userData.profilePicUrl} alt="profile picture" />
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <div className="text-center">
                        <h1 className="text-4xl text-black font-extrabold">{userData.fullname}</h1>
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
                            <div className="font-bold">Username</div>
                            <div className="font-bold">{userData.username}</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-bold">Email</div>
                            <div className="font-bold">{userData.email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                <div className="w-1/2">
                    <div className="flex justify-between">
                        <div className="text-xl font-extrabold bg-red-600 text-white hover:bg-red-500 p-2 rounded-md cursor-pointer" onClick={deleteAccount}>Delete Account</div>
                        <div className="text-xl font-extrabold bg-blue-700 p-2 text-white rounded-md cursor-pointer hover:bg-blue-500" onClick={handleLogout}>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}