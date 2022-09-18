import React from "react";

const Workout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-row">
      <div className="p-10  ">
        <iframe
          className="rounded-lg"
          width="850"
          height="600"
          src="https://www.youtube.com/embed/oDdkytliOqE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="p-8">
        <h1 className="text-5xl font-extrabold">Knee High Jumps</h1>
        <p className="p-2 text-xl">3 sets x 20 reps</p>
        <p className="p-2 text-2xl text-left">
          High knees might seem like a simple exercise to perform, but cranking
          out a few sets of this high energy move gets your heart pumping,
          activates your lower body and core muscles, and leads to a quick
          sweat.
        </p>
      </div>
    </div>
  );
};

export default Workout;
