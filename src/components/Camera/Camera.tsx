import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

interface CameraProps {
  position: string;
}

export function Camera(props: CameraProps) {
  const { position } = props;

  return (
    <div className="w-2/4 h-[25px] bg-black rounded-full flex items-center justify-between px-3">
      <div>
        {position === "locked" ? (
          <FaLock size={15} color={"white"} />
        ) : (
          <FaLockOpen />
        )}
      </div>
      <div className="w-[20px] h-[20px] bg-[#28289a] rounded-full border-solid border-[4px] border-[#19194b]"></div>
    </div>
  );
}
