import { Workout } from "@prisma/client";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import React from "react";
import Workouts from "../../components/programs";
import { prisma } from "../../lib/prisma";

const BrowseWorkout = ({ updatedWorkout }:{updatedWorkout:Workout}) => {
  console.log(updatedWorkout);
  const programs = [
    {
      id: 1,
      name: "Leg Day",
      href: "/workout/1/exercise",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/kneeHighJumps.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      name: "Back Day",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/AbSmasher.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "Yoga",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/soccerJumps.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 4,
      name: "Upper Day",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/pushup.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
  ];

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
      <Workouts programs={programs} />
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
  },
});
