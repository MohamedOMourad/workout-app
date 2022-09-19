import React from "react";

const Calender = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="p-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Workout History</h1>
      </div>
      <div className="sticky top-20 bg-gray-50 px-4 py-6 shadow sm:rounded sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
            <div>
                <h3>
                    Workout
                </h3>
            </div>
      </div>
    </div>
  );
};

export default Calender;
