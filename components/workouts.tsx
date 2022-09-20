import { Workout } from '@prisma/client';
import React from 'react'

const Workouts = ({ updatedWorkout }: { updatedWorkout: Workout[] }) => {

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {updatedWorkout.map((workout: any) => (
            <a key={workout.id} href={`/workout/${workout.id}/exercise`} className="group">
              <div className="w-50 h-80 overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                <img
                  height={100}
                  width={100}
                  src={workout.imgUrl}
                  alt={workout.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{workout.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workouts;
