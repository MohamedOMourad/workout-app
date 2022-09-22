import { User } from '@prisma/client';
import { getUser, withPageAuth } from '@supabase/auth-helpers-nextjs';
import type { NextPage } from 'next'
import Progress from '../components/progress';
import WorkoutTable from '../components/workoutTable'
import { prisma } from "../lib/prisma";

const Home: NextPage = ({ updatedUser }: { updatedUser?: User }) => {
  console.log(updatedUser)
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-zinc-100 py-10 w-full min-h-screen">
        <div className='bg-white py-5 px-7 drop-shadow'>
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-14 w-14 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-2xl font-bold text-gray-900 group-hover:text-gray-900">Good morning, {updatedUser?.firstName}</p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">🔥10 Day Streak</p>
            </div>
          </div>
        </div>
        <div className='m-5'>
          <p className='my-5 text-lg font-bold'>Personal Records 🏆</p>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Squad</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">550ibs</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Squad</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">550ibs</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Squad</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">550ibs</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="truncate text-sm font-medium text-gray-500">Squad</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">550ibs</div>
                      </dd>
                    </dl>
                  </div>

                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
              </div>
            </div>
          </div>

          <div >
            <p className='my-5 text-lg font-bold'>Progress</p>
            <Progress />
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;

export const getServerSideProps = withPageAuth({
  redirectTo: '/login', async getServerSideProps(ctx) {
    const { user } = await getUser(ctx);
    const User = await prisma.user.findUnique({ where: { email: user?.email } })
    const updatedUser = { ...User, createdAt: User?.createdAt.getTime() }
    return { props: { updatedUser } };
  }
});

