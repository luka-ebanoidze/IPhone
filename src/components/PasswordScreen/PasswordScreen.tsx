import { useState, useEffect } from "react";
import { Camera } from "../Camera";

import { useNavigate } from "react-router-dom";

export function PasswordScreen() {
  const navigate = useNavigate();

  const [Passcode, setPasscode] = useState<number[]>([]);
  const [isSet, setIsSet] = useState<boolean>();

  const [position, setPosition] = useState("center");

  const handleDivClick = () => {
    setPosition("right");
    setTimeout(() => {
      setPosition("left");
      setTimeout(() => {
        setPosition("center");
      }, 100); // Return to center after 5 seconds
    }, 100); // Move left after 5 seconds
  };

  useEffect(() => {
    let codeAsString = "[" + Passcode.join(",") + "]";
    if (codeAsString === localStorage.getItem("Passcode")) {
      navigate("/home");
    } else if (
      codeAsString !== localStorage.getItem("Passcode") &&
      Passcode.length === 6 &&
      isSet === true
    ) {
      handleDivClick();
      setPasscode([]);
    }

    if (localStorage.getItem("Passcode")) {
      setIsSet(true);
    } else if (!localStorage.getItem("Passcode")) {
      setIsSet(false);
    }
  }, [Passcode.length]);

  return (
    <div className="h-full flex flex-col items-center justify-between py-3 pb-5">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-white text-lg">
          {isSet ? "Enter Passcode" : "Choose Passcode"}
        </h2>
        <div
          className={`flex gap-5 transition-transform ${
            position === "right"
              ? "translate-x-10"
              : position === "left"
              ? "-translate-x-10"
              : ""
          }`}
        >
          <div
            className={`w-[15px] h-[15px] bg-black rounded-full border-solid border-white border-[2px] ${
              Passcode.length >= 1 && "bg-white"
            }`}
          ></div>
          <div
            className={`w-[15px] h-[15px] bg-black rounded-full border-solid border-white border-[2px] ${
              Passcode.length >= 2 && "bg-white"
            }`}
          ></div>
          <div
            className={`w-[15px] h-[15px] bg-black rounded-full border-solid border-white border-[2px] ${
              Passcode.length >= 3 && "bg-white"
            }`}
          ></div>
          <div
            className={`w-[15px] h-[15px] bg-black rounded-full border-solid border-white border-[2px] ${
              Passcode.length >= 4 && "bg-white"
            }`}
          ></div>
          <div
            className={`w-[15px] h-[15px] bg-black rounded-full border-solid border-white border-[2px] ${
              Passcode.length >= 5 && "bg-white"
            }`}
          ></div>
          <div
            className={`w-[15px] h-[15px] bg-black rounded-full border-solid border-white border-[2px] ${
              Passcode.length >= 6 && "bg-white"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-4/5 gap-3">
        <div
          onClick={() => {
            setPasscode([...Passcode, 1]);
          }}
          className={
            "w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
          }
        >
          1
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 2]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          2
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 3]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          3
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 4]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          4
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 5]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          5
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 6]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          6
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 7]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          7
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 8]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          8
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 9]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          9
        </div>
        <div
          onClick={() => {
            setPasscode([...Passcode, 0]);
          }}
          className="w-[70px] h-[70px] rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl cursor-pointer"
        >
          0
        </div>
      </div>
      {isSet === false && (
        <div className="flex flex-col gap-3 justify-between w-full">
          <button
            className={`text-white text-lg cursor-pointer`}
            onClick={() => {
              setIsSet(true);
              setPasscode([]);
              localStorage.setItem("Passcode", JSON.stringify(Passcode));
            }}
          >
            Set Passcode
          </button>
          <button
            className={`text-white cursor-pointer`}
            onClick={() => {
              setPasscode([]);
            }}
          >
            Reset
          </button>
        </div>
      )}
      <div className="w-full flex justify-between px-8">
        <h3
          className="text-white cursor-pointer"
          onClick={() => {
            navigate("/emergency");
          }}
        >
          Emergency
        </h3>
        {Passcode.length === 0 ? (
          <h3
            className="text-white cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Close
          </h3>
        ) : (
          <h3
            className="text-white cursor-pointer"
            onClick={() => {
              const updatedPasscode = [...Passcode];
              updatedPasscode.pop();
              setPasscode(updatedPasscode);
            }}
          >
            Delete
          </h3>
        )}
      </div>
    </div>
  );
}
