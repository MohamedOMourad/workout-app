import React from "react";
import Calendertest from "../components/calendertest";

const Calender = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-56 py-10">
      <div className=" w-1/2">
        <h1 className=" text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Workout history
        </h1>
        <div className="sticky top-20 bg-gray-50 ms-2 shadow sm:rounded sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
          <div>
            <h3 className="font-medium text-gray-900">Workout</h3>
            <p className="md:mt-1">Cardio Day</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Data</h3>
            <time className="">Junuary 14, 2021</time>
          </div>
        </div>
        <div className="my-6 flex rounded-br-3xl rounded-tr-3xl bg-gray-50 shadow sm:rounded-bl-3xl sm:rounded-tl-3xl sm:rounded-tr-none sm:rounded-br-none">
        <div className=" flex ">
        <div className="w-1/3" >
              <img src="./assets/images/login.jpg"/>
          </div>
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
          
        </div>
      </div>
      </div>
      
      <Calendertest/>
    </div>
  );
};

export default Calender;
