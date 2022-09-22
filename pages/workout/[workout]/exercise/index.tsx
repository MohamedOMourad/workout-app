import { Exercise, Workout, WorkoutLine } from '@prisma/client';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import Exercises from '../../../../components/exercise'
import { prisma } from "../../../../lib/prisma";

const index = ({ exercises, id }: { exercises: any, id: string }) => {
  console.log(exercises.workoutLineRelation)
  return (
    <div>
      <Exercises exercises={exercises.workoutLineRelation} id={id} />
    </div>
  )
}

export default index;

export const getStaticPaths: GetStaticPaths = async () => {
  const workouts = await prisma.workout.findMany()
  const paths = workouts.map((workout) => {
    return {
      params: { workout: workout.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workout = await prisma.workout.findFirst({
    where: { id: +params?.workout! },
    include: {
      workoutLineRelation: { select: { exercise: true } }
    }
  })

  return {
    props: { exercises: JSON.parse(JSON.stringify(workout)), id: +params?.workout! },
  };
};