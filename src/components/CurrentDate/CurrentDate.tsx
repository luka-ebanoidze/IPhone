import React, { useEffect, useState } from "react";

export function CurrentDate() {
  const [currentTime, setCurrentTime] = useState(new Date())
  setInterval(()=>{
    setCurrentTime(new Date())
  },1000)
  
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[currentTime.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentTime.getMonth()];
  let number = currentTime.getDate();

  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex gap-2">
        <h3>{day},</h3>
        <h3>{number}</h3>
        <h3>{month}</h3>
      </div>
      <div className="flex items-center gap-1">
        <h1 className="text-7xl">{hours}</h1>
        <span className="text-7xl">:</span>
        <h1 className="text-7xl">
          {minutes < 10 && minutes > 0 ? "0" + minutes : minutes}
        </h1>
      </div>
    </div>
  );
}
