import { Outlet } from "react-router-dom";
import { Camera } from "../components/Camera";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";
import { MainButton } from "../components/MainButton";

export function Layout() {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  let param = useParams();

  return (
    <div
      className={`w-full h-full flex flex-col items-center ${
        param.calculator && "bg-black"
      }`}
    >
      <header className="flex items-center justify-center gap-5 my-3 w-full">
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
      {param.app && <MainButton />}
    </div>
  );
}
