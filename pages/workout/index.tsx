import { Workout } from "@prisma/client";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { GetStaticProps } from "next";
import React from "react";
import Workouts from "../../components/workouts";
import { prisma } from "../../lib/prisma";

const BrowseWorkout = ({ workouts }: { workouts: Workout[] }) => {
  console.log(workouts)
  return (
    <div className="min-h-screen bg-gray-100">
      <div className=" text-center mt-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Browse our carefully curated exercises
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Thoughtfully designed exercises meant to push you to the absolute
          limits.
        </p>
      </div>
      <Workouts workouts={workouts} />
    </div>
  );
};

export default BrowseWorkout;

export const getStaticProps: GetStaticProps = async () => {
  const workouts = await prisma.workout.findMany()
  return {
    props: { workouts: JSON.parse(JSON.stringify(workouts)) },
  };
};
