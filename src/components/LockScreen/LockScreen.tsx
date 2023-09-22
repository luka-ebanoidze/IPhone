import { CurrentDate } from "../CurrentDate/CurrentDate";
import { MainButton } from "../MainButton";
import { useNavigate } from "react-router-dom";

export  function LockScreen() {

  const navigate = useNavigate()
  
  return (
    <div className="h-full w-full flex flex-col justify-between py-3">
      <div className="flex flex-col items-center gap-8">
        <CurrentDate />
      </div>
      <div className="w-full flex justify-center cursor-pointer " onClick={()=>{navigate("/password")}}><MainButton /></div>
    </div>
  );
}

