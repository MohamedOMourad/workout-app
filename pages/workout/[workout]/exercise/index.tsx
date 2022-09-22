import { useUser } from '@supabase/auth-helpers-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Exercises from '../../../../components/exercise'
import { prisma } from "../../../../lib/prisma";

const index = ({ exercises, id }: { exercises: any, id: string }) => {
  const { user, isLoading } = useUser();
  const router = useRouter()
  useEffect(() => {
    if (user === null && isLoading === false) {
      router.push("/login")
    }
  }, [isLoading]);
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