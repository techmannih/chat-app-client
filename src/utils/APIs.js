import axios from "axios";

// function to hit createUser API endpoint
export const createUser = async (data) => {
  const user = await axios.post(`${import.meta.env.VITE_SERVER_URI}/users/new`, data);
  if(user){
    return true;
  }else{
    return false;
  }
}

