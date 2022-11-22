import { useUser } from "@supabase/auth-helpers-react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Timer from "../../../../components/timer";
import WorkoutTable from "../../../../components/workoutTable";
import { prisma } from "../../../../lib/prisma";
const Exercise = ({ exercise, sets }: any) => {
  const { user, isLoading } = useUser();
  const router = useRouter();
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
            src={exercise.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="p-10 w-full lg:w-1/2 ">
          <h1 className="text-5xl font-extrabold">{exercise.name}</h1>
          <p className="p-2 text-xl">{`${exercise.workoutLineRelation[0].set} x ${exercise.workoutLineRelation[0].reps}`}</p>
          <p className="p-2 text-2xl text-left">{exercise.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/3 w-full">
          <WorkoutTable exercise={exercise} sets={sets} />
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
  const workoutLines = await prisma?.workoutLine?.findMany()
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
  const exercise = await prisma?.exercise?.findFirst({
    where: { id: +params?.exercise! },
    include: {
      workoutLineRelation: { where: { workoutId: +params?.workout! } }
    }
  })
  const sets = [];
  const length = exercise!.workoutLineRelation[0].set;
  for (let i = 0; i < length; i++) {
    sets.push({ weight: exercise!.workoutLineRelation[0].weight, reps: exercise!.workoutLineRelation[0].reps })
  }

  return {
    props: { exercise: JSON.parse(JSON.stringify(exercise)), sets }
  };
};
