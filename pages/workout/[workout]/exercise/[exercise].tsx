import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import WorkoutTable from "../../../../components/workoutTable";

const Exercise = () => {
  const [isPlay, setplaying] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="flex w-full flex-wrap">
        <div className="p-10 w-full lg:w-1/2 ">
          <iframe
            width={"100%"}
            height="315"
            src="https://www.youtube.com/embed/oDdkytliOqE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="p-10 w-full lg:w-1/2 ">
          <h1 className="text-5xl font-extrabold">Knee High Jumps</h1>
          <p className="p-2 text-xl">3 sets x 20 reps</p>
          <p className="p-2 text-2xl text-left">
            High knees might seem like a simple exercise to perform, but
            cranking out a few sets of this high energy move gets your heart
            pumping, activates your lower body and core muscles, and leads to a
            quick sweat.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/3 w-full">
          <WorkoutTable />
        </div>
        <div className=" lg:w-1/3 flex flex-col items-center w-full">
          {isPlay ?
            <CountdownCircleTimer
              isPlaying
              duration={30}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[30, 20, 10, 0]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            :
            <CountdownCircleTimer
              duration={30}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[30, 20, 10, 0]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          }

          <button
            type="button"
            onClick={() => setplaying(!isPlay)}
            className="m-2  inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isPlay ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
});
