import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import React from "react";
import Calender from "../components/calender";

const CalenderLog = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 px-56 py-10">
      <div className=" lg:w-1/2 w-full">
        <h1 className="mb-5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Workout history
        </h1>
        <div className="sticky top-20 bg-gray-50 ms-2 shadow sm:rounded sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
          <div>
            <h3 className="font-medium text-gray-900">Workout</h3>
            <p className="md:mt-1">Cardio Day</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Data</h3>
            <time className="">January 14, 2021</time>
          </div>
        </div>
        <div className="mt-10 border-t bg-gray-50">
          <div className="flex space-x-6 border-b border-gray-200 ">
            <img
              src="./assets/images/login.jpg"
              className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
            />
            <div className="flex flex-auto flex-col">
              <div>
                <h4 className="font-medium text-gray-900">
                  <a href="#">Jumping jacks</a>
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  10 reps·20 Kg
                  10 reps·30 Kg
                  10 reps·30 Kg
                  100 reps·4 Kg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Calender />
      </div>
    </div>
  );
};

export default CalenderLog;


export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
});

