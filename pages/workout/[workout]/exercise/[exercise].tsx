import { useUser } from "@supabase/auth-helpers-react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Timer from "../../../../components/timer";
import WorkoutTable from "../../../../components/workoutTable";
import { prisma } from "../../../../lib/prisma";
const Exercise = ({ exercises }: any) => {
  const [isPlay, setplaying] = useState(false);
  const { user, isLoading } = useUser();
  const router = useRouter()
  useEffect(() => {
    if (user === null && isLoading === false) {
      router.push("/login")
    }
  }, [isLoading]);
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="flex w-full flex-wrap">
        <div className="p-10 w-full lg:w-1/2 ">
          <iframe
            width={"100%"}
            height="315"
            src=""
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
          <WorkoutTable exercises={exercises} sets={exercises.workoutLineRelation[0].set } />
        </div>
        <div className=" lg:w-1/3 flex flex-col items-center w-full">
          <Timer />
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
