import React, { useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const Timer = () => {
    const [isPlay, setplaying] = useState(false);
    return (
        <>
           {isPlay ? (
        <CountdownCircleTimer
          isPlaying={isPlay}
          duration={30}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[30, 20, 10, 0]}
          onComplete={() => {
            setTimeout(() => {
              setplaying(false);
            }, 1000);
            return { shouldRepeat: true, delay: 1 }; // repeat animation in 1.5 seconds
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      ) : (
        <CountdownCircleTimer
          duration={30}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[30, 20, 10, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      )}
        </>
    )
}

export default Timer;
