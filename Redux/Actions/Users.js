import Axios from "axios";

export const postLogin = () => {
  return {

    type: "POST_LOGIN",
    payload: Axios.post("https://mybookcollections.herokuapp.com//user/login")
  }

};

export const postRegister = (dataRegister)=> {
  return{
    type: "POST_REGISTER",
    payload : Axios.post(`https://mybookcollections.herokuapp.com/user/register`,dataRegister)
  }
}