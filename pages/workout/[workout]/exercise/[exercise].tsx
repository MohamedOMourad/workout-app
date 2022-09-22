import { useUser } from "@supabase/auth-helpers-react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import WorkoutTable from "../../../../components/workoutTable";
import { prisma } from "../../../../lib/prisma";
const Exercise = ({ exercises }: any) => {
  const [isPlay, setplaying] = useState(false);
  const { user, isLoading } = useUser();
  const router = useRouter()
  console.log(user)
  useEffect(() => {
    if (!user && isLoading === false) {
      router.push("/login")
    }
  }, [user]);
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
          <h1 className="text-5xl font-extrabold">{exercises.name}</h1>
          <p className="p-2 text-xl">{`${exercises.workoutLineRelation[0].set} x ${exercises.workoutLineRelation[0].reps}`}</p>
          <p className="p-2 text-2xl text-left">{exercises.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/3 w-full">
          <WorkoutTable exercises={exercises} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const workoutLines = await prisma.workoutLine.findMany()
  const paths = workoutLines.map((workoutLine) => {
    return {
      params: { workout: workoutLine.workoutId.toString(), exercise: workoutLine.exerciseId.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workout = await prisma.exercise.findFirst({
    where: { id: +params?.exercise! },
    include: {
      workoutLineRelation: { where: { workoutId: +params?.workout! } }
    }
  })

  return {
    props: { exercises: JSON.parse(JSON.stringify(workout)) },
  };
};
