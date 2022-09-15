import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const createUser = async (values: any) => {
    const res = await API.post('/user', values)
    const user = await res.data.user;
    console.log(user)
}

export const loginAPI = async (values: object) => {
  try {
    const res = await API.get("/user",values );
    const user = await res.data.user
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

