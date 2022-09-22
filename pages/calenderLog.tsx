import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import WorkoutHistory from "../components/workoutHistory";

const CalenderLog = () => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let newDays = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };
  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  return (
    <div className="min-w-screen lg:grid lg:grid-cols-12 lg:gap-x-10">
      <div className="my-10 text-center col-start-1 col-end-12 lg:col-start-6 lg:col-end-12 lg:row-start-1 lg:mt-9 xl:col-start-9">
        <div className="flex items-center text-gray-900">
          <button
            onClick={previousMonth}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto font-semibold">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </div>
          <button
            onClick={nextMonth}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {newDays.map((day, dayIdx) => (
            <button
              onClick={() => {
                setSelectedDay(day);
              }}
              key={day.toString()}
              type="button"
              className={classNames(
                "py-1.5 hover:bg-gray-100 focus:z-10",
                isSameMonth(day, today) ? "bg-white" : "bg-gray-50",
                (isEqual(day, selectedDay) || isToday(day)) &&
                "font-semibold",
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) &&
                isSameMonth(day, today) &&
                !isToday(day) &&
                "text-gray-900",
                !isEqual(day, selectedDay) &&
                !isSameMonth(day, today) &&
                !isToday(day) &&
                "text-gray-400",
                isToday(day) && !isEqual(day, selectedDay) && "text-red-600",
                dayIdx === 0 && "rounded-tl-lg",
                dayIdx === 6 && "rounded-tr-lg"
              )}
            >
              <time
                dateTime={day.toString()}
                className={classNames(
                  "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                  isEqual(day, selectedDay) && isToday(day) && "bg-red-600",
                  isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900"
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </time>
            </button>
          ))}
        </div>
      </div>
      <div className="m-auto lg:my-10 lg:mx-20 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          <div className="sticky bg-[#F9FAFB] p-5 flex w-1\2">
            <div className="w-1/2">
              <h2 className="font-semibold ">Workout</h2>
              <span>Leg Day</span>
            </div>
            <div className="w-1/2">
              <h2 className="font-semibold ">Date</h2>
              <span>January 14, 2021</span>
            </div>
          </div>
          <WorkoutHistory />
      </div>
    </div>
  );
};

export default CalenderLog;


export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
});

