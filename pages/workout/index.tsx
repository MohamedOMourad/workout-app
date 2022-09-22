import { Workout } from "@prisma/client";
import { useUser } from '@supabase/auth-helpers-react';
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Workouts from "../../components/workouts";
import { prisma } from "../../lib/prisma";

const BrowseWorkout = ({ workouts }: { workouts: Workout[] }) => {
  const { user, isLoading } = useUser();
  const router = useRouter()
  useEffect(() => {
    if (user === null && isLoading === false) {
      router.push("/login")
    }
  }, [isLoading]);
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
