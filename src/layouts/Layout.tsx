import { Outlet } from "react-router-dom";
import { Camera } from "../components/Camera";
import { useState } from "react";

import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";

export function Layout() {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  return (
    <div className="w-full h-full flex flex-col">
      <header className="flex items-center justify-center gap-5 my-3">
        <div className="text-white">
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes < 10 && minutes > 0 ? "0" + minutes : minutes}</span>
        </div>
        <Camera position="locked" />
        <div className="flex items-center justify-center gap-2">
          <span>
            <AiOutlineWifi size={20} color={"white"} />
          </span>
          <span>
            <BsBatteryHalf size={20} color={"white"} />
          </span>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
