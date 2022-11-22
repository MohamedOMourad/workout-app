import axios from "axios";

export const createUser = async (values: any, id: any) => {
    console.log(id)
    console.log(id)
    const res = await axios.post('/api/user', { ...values, id: id })
    const user = await res.data.newUser;
}

export const addUserRecord = async (weight: string, reps: string, step: number, id: string) => {
    console.log({ workoutLineId: id, reps: +reps, step: +step, weight: +weight })
    const res = await axios.post('/api/userrecords', { workoutLineId: id, reps: +reps, step: +step, weight: +weight })
    const user = await res.data.newUser;
}

