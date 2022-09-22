import axios from "axios";

export const createUser = async (values: any, id: any) => {
    console.log(id)
    const res = await axios.post('/api/user', { ...values, id: id })
    const user = await res.data.newUser;
    console.log(user)
}

export const addUserRecord = async (weight: string, reps: string, step: number, id: string) => {
    const res = await axios.post('/api/userrecords', { workoutLineId: id, reps: reps, step: step, weight: weight })
    const user = await res.data.newUser;
    console.log(user)
}

