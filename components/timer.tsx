import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
    const [isPlay, setplaying] = useState(false);
    return (
        <>
            {
                isPlay ?
                    <CountdownCircleTimer
                        isPlaying
                        duration={30}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[30, 20, 10, 0]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer >
                    :
                    <CountdownCircleTimer
                        duration={30}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[30, 20, 10, 0]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
            }

            <button
                type="button"
                onClick={() => setplaying(!isPlay)}
                className="m-2  inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                {isPlay ? "Pause" : "Start"}
            </button>
        </>
    )
}

export default Timer;
