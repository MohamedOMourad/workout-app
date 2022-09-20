import { Workout } from "@prisma/client";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import React from "react";
import Workouts from "../../components/programs";
import { prisma } from "../../lib/prisma";

const BrowseWorkout = ({ updatedWorkout }: { updatedWorkout: Workout }) => {
  console.log(updatedWorkout)
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
      <Workouts programs={updatedWorkout} />
    </div>
  );
};

export default BrowseWorkout;

export const getServerSideProps = withPageAuth({
  redirectTo: "/login",
  async getServerSideProps() {
    // Access the user object
    const workouts = await prisma.workout.findMany();
    const updatedWorkout = workouts.map((workout) => {return{
      ...workout,
      createdAt: workout.createdAt.getTime(),
    }});
    return { props: { updatedWorkout } };
  }
});
