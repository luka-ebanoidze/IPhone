import { Camera } from "../Camera";
import { CurrentDate } from "../CurrentDate/CurrentDate";
import { MainButton } from "../MainButton";

export  function LockScreen() {
  
  return (
    <div className="h-full w-full flex flex-col justify-between py-3">
      <div className="flex flex-col items-center gap-3">
        <Camera position="locked" />
        <CurrentDate />
      </div>
      <div className="w-full flex justify-center"><MainButton /></div>
    </div>
  );
}

