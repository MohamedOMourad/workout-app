import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const create = async () => {
  const res = await API.post("/");
};

export const loginAPI = async (values: object) => {
  try {
    const res = await API.get("/user",values );
    const user = await res.data.user
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
