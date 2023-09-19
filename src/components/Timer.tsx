// timer.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../store'; // Import the RootState from your Redux store setup

interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer: React.FC<{}> = ({}) => {
  const { hours, minutes, seconds } = useSelector((state: RootState) => state.timer);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    hours,
    minutes,
    seconds,
  });

	useEffect(()=>{
		setTimeRemaining({hours, minutes, seconds})
	} , [hours, minutes, seconds])
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timeRemaining.minutes > 0 || timeRemaining.seconds > 0 || timeRemaining.hours > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime: any) => {
          if (prevTime.seconds === 0) {
            if (prevTime.minutes === 0) {
              if (prevTime.hours === 0) {
                console.log(`galted`);
								clearInterval(interval);
              } else {
                return {
                  hours: prevTime.hours - 1,
                  minutes: 59,
                  seconds: 59,
                };
              }
            } else {
              return {
                ...prevTime,
                minutes: prevTime.minutes - 1,
                seconds: 59,
              };
            }
          } else {
            return {
              ...prevTime,
              seconds: prevTime.seconds - 1,
            };
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  return (
    <div className="timer">
      <div className="time">
        <h2>{timeRemaining.hours.toString().padStart(2, '0')}</h2>
        <p>Hour</p>
      </div>
      <div className="divide"></div>
      <div className="time">
        <h2>{timeRemaining.minutes.toString().padStart(2, '0')}</h2>
        <p>Min</p>
      </div>
      <div className="divide"></div>
      <div className="time">
        <h2>{timeRemaining.seconds.toString().padStart(2, '0')}</h2>
        <p>Sec</p>
      </div>
    </div>
  );
};
