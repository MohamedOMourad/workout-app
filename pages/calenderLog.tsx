import React from "react";
import Calender from "../components/calender";

const CalenderLog = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 px-56 py-10">
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

      <Calender />
    </div>
  );
};

export default CalenderLog;




{/* <div className="my-6 h-full flex rounded-br-3xl rounded-tr-3xl bg-gray-50 shadow sm:rounded-bl-3xl sm:rounded-tl-3xl sm:rounded-tr-none sm:rounded-br-none">
    <img className="w-1/3 h-full" src="./assets/images/login.jpg" />
    <div className="w-2/3">
      <h4 className="font-medium text-gray-900">30 min run</h4>
      <p className="mt-2 hidden text-sm text-gray-500 sm:block">
        This durable double-walled insulated tumbler keeps your beverages
        at the perfect temperature all day long. Hot, cold, or even
        lukewarm if you're weird like that, this bottle is ready for your
        next adventure
      </p>
      <div className="m-2 mt-2 flex text-sm font-medium sm:mt-2">
        <a href="#" className="text-black hover:text-black">View Exercise</a>
      </div>
    </div>
  </div> */}