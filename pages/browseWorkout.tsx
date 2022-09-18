import React from "react";

const BrowseWorkout = () => {
  const workouts = [
    {
      id: 1,
      name: "Knee High Jumps",
      href: "/workOut",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/kneeHighJumps.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      name: "Ab Smasher",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/AbSmasher.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "Soccer Jumps",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/soccerJumps.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 4,
      name: "Push Up",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "./assets/images/pushup.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    // More products...
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
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
            {workouts.map((workout) => (
              <a key={workout.id} href={workout.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                  <img
                    src={workout.imageSrc}
                    alt={workout.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{workout.name}</h3>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">
                  {workout.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseWorkout;
