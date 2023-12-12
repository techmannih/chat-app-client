import React, { useState } from 'react';
import { googleSignIn } from '../../fireauth/firebase_auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../fireauth/firebase_auth';
import { createUser, setCookies } from '../../utils/APIs';
import { useNavigate } from 'react-router-dom';

const Authenticate = ({isLoggedIn, setIsLoggedIn}) => {
    const [error, setError] = useState('');

    const handleSignup = async () => {
        await signInWithPopup(auth, googleSignIn)
            .then((resp) => {
                const reqData = {
                    fullname: resp.user.displayName,
                    userId: resp.user.uid,
                    profilePicUrl: resp.user.photoURL,
                    email: resp.user.email
                }
                createUser(reqData);
                setCookies('userId', resp.user.uid, 1);
                setIsLoggedIn(true);
                setError('');
                window.location.href = "/";
            }).catch((error) => {
                setIsLoggedIn(false);
                console.error(error);
                setError('Error occured !!');
            });
    };

    return (
        <div className="bg-gradient-to-r from-blue-800 via-purple-900 to-indigo-800 h-screen p-1">
            <div className="lg:w-1/3 m-auto p-6 mt-44 flex items-center flex-col">
                <h1 className='text-center text-5xl text-white mb-10'>Welcome to Chat App</h1>
                <div className="w-36 h-36 m-auto">
                    <img src="src/assets/img/chat.png" alt="" />
                </div>
                <div className="text-red-200 text-center text-2xl mt-4">{error}</div>
                <div className="bg-gradient-to-r from-blue-400 via-purple-300 to-blue-500 flex items-center justify-center p-3 w-2/3 rounded-xl mt-14 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-blue-500" onClick={handleSignup}>
                    <div className="w-12 h-12 mx-8">
                        <img src="src/assets/img/google.png" alt="" />
                    </div>
                    <button className="bg-transparent outline-none font-bold md:text-2xl text-md text-white rounded-md sm:text-md">Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Authenticate;
