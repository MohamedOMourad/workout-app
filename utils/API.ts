import axios from "axios";

export const createUser = async (values: any) => {
   
    const res = await axios.post('api/user', values)
    console.log(res)
    const user = await res.data.newUser;
    console.log(user)
}

