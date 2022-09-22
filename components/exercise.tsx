import { Exercise } from '@prisma/client';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import React from 'react'

const Exercises = ({ exercises, id }: { exercises: Exercise[], id: string }) => {

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {exercises.map((exercise: any) => (
            <a key={exercise.exercise.id} href={`/workout/${id}/exercise/${exercise.exercise.id}`} className="group">
              <div className=" overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                <img
                  height={100}
                  width={100}
                  src={exercise.exercise.imgUrl}
                  alt={exercise.exercise.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{exercise.exercise.name}</h3>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {exercise.exercise.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Exercises;

