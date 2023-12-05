import React, { useState } from 'react';
import { googleSignIn } from '../../fireauth/firebase_auth';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth } from '../../fireauth/firebase_auth';
import { createUser } from '../../utils/APIs';

const Signup = () => {
    const [error, setError] = useState('Error Signing In !!');
    const handleSignup = async () => {
        try {
            await signInWithPopup(auth, googleSignIn)
                .then((resp) => {
                    console.log(resp);
                    const reqData = {
                        fullname: resp.user.displayName,
                        userId: resp.user.uid,
                        profilePicUrl: resp.user.photoURL,
                        email: resp.user.email
                    }
                    const res = createUser(reqData);
                    if(res === true){
                        console.log('User created successfully');
                    }else{
                        console.log('User not created');
                    }
                }).catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-800 via-purple-900 to-indigo-800 h-screen p-1">
            <div className="lg:w-1/3 m-auto p-6 mt-44 flex items-center flex-col">
                <h1 className='text-center text-5xl text-white mb-10'>Welcome to Chat App</h1>
                <div className="w-36 h-36 m-auto">
                    <img src="src/assets/img/chat.png" alt="" />
                </div>
                {
                    error && <div className="text-red-200 text-center text-2xl mt-4">{error}</div>
                }
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

export default Signup;
