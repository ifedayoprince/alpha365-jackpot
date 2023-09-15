import {useState, useEffect } from 'react';

export function Timer({}) {
	const [timeRemaining, setTimeRemaining] = useState({
		hours: 0,
    minutes: 10,
    seconds: 0,
  });

  useEffect(() => {
    let interval;
    if (timeRemaining.minutes > 0 || timeRemaining.seconds > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime.seconds === 0) {
            if (prevTime.minutes === 0) {
            	if (prevTime.hours === 0) {
             		clearInterval(interval);
              	// You can add a callback here to notify when the countdown is done
            	} else {
            		let psuedo = {
            			...prevTime, 
            			hours: prevTime.hours - 1,
            			minutes: 59
            		}
            	}
            } else {
              return {
              	...prevTime, 
                minutes: prevTime.minutes - 1,
                seconds: 59
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
	
  return <div className="timer">
				<div className="time">
					<h2>00</h2>
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
			</div>;
}
  