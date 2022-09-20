import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import Exercises from '../../../../components/programs'

const index = () => {
  const programs = [
    {
      id: 1,
      name: "Knee High Jumps",
      href: "/workout/1/exercise/1",
      description: "3 sets x 20 reps",
      imageSrc: "../../assets/images/kneeHighJumps.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      name: "Ab Smasher",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "../../assets/images/AbSmasher.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "Soccer Jumps",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "../../assets/images/soccerJumps.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 4,
      name: "Push Up",
      href: "#",
      description: "3 sets x 20 reps",
      imageSrc: "../../assets/images/pushup.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
  ];
  return (
    <div>
      <Exercises programs={programs} />
    </div>
  )
}

export default index

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
});