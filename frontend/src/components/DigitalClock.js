import React, {useEffect, useState} from "react";
import {DigitalClockStyle, DisplayClock} from "./styles/DigitalClock.styled";

const DigitalClock = () => {
    const [currentTime, setTime] = useState({
            minutes: new Date().getMinutes(),
            hours: new Date().getHours(),
            seconds: new Date().getSeconds()
        }
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            let currentDate = new Date();
            setTime({
                minutes: currentDate.getMinutes(),
                hours: currentDate.getHours(),
                seconds: currentDate.getSeconds()
            })
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return(
        <DigitalClockStyle>
            <DisplayClock>{`${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`}</DisplayClock>
        </DigitalClockStyle>
    );
}

export default DigitalClock;
