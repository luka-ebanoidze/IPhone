import { TbMathXDivideY2 } from "react-icons/tb";
import { CgMathDivide } from "react-icons/cg";

import { useState } from "react";

export function Calculator() {
  let [number, setNumber] = useState("0");
  const [math, setMath] = useState<string[]>([]);

  let result = 0;
  let currentOperator = "";

  for (let i = 0; i < math.length; i++) {
    const item = math[i];

    if (item === "+") {
      currentOperator = "+";
    } else if (item === "-") {
      currentOperator = "-";
    } else if (item === "x") {
      currentOperator = "x";
    } else {
      const num = parseFloat(item);
      if (!isNaN(num)) {
        if (currentOperator === "+") {
          result += num;
        } else if (currentOperator === "-") {
          result -= num;
        } else if (currentOperator === "x") {
          result *= num;
        }
      }
    }
  }

  console.log(result);

  return (
    <div className="w-full h-full bg-black flex flex-col justify-end items-center gap-5">
      <div className="text-white w-4/5 h-[150px] flex justify-end items-end text-7xl">
        {number}
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        <div className="w-[60px] h-[60px] bg-gray-400 rounded-full flex justify-center items-center text-3xl">
          AC
        </div>
        <div className="w-[60px] h-[60px] bg-gray-400 rounded-full flex justify-center items-center text-3xl">
          <TbMathXDivideY2 />
        </div>
        <div className="w-[60px] h-[60px] bg-gray-400 rounded-full flex justify-center items-center text-3xl">
          %
        </div>
        <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center text-3xl bg-orange-500 text-white">
          <CgMathDivide />
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("7");
            } else {
              setNumber(number + "7");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          7
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("8");
            } else {
              setNumber(number + "8");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          8
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("9");
            } else {
              setNumber(number + "9");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          9
        </div>
        <div className="w-[60px] h-[60px]  rounded-full flex justify-center items-center text-3xl text-white bg-orange-500 pb-1">
          x
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("4");
            } else {
              setNumber(number + "4");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          4
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("5");
            } else {
              setNumber(number + "5");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          5
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("6");
            } else {
              setNumber(number + "6");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          6
        </div>
        <div className="w-[60px] h-[60px]  rounded-full flex justify-center items-center text-3xl text-white bg-orange-500">
          -
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("1");
            } else {
              setNumber(number + "1");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          1
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("2");
            } else {
              setNumber(number + "2");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          2
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("3");
            } else {
              setNumber(number + "3");
            }
          }}
          className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white"
        >
          3
        </div>
        <div
          onClick={() => {
            setMath([...math, number, "+"]);
            setNumber("");
          }}
          className="w-[60px] h-[60px]  rounded-full flex justify-center items-center text-3xl text-white bg-orange-500 pb-1"
        >
          +
        </div>
        <div
          onClick={() => {
            if (number === "0") {
              setNumber("0");
            } else {
              setNumber(number + "0");
            }
          }}
          className="w-[130px] h-[60px] bg-gray-500 rounded-full flex pl-5 items-center text-3xl text-white"
        >
          0
        </div>
        <div className="w-[60px] h-[60px] bg-gray-500 rounded-full flex justify-center items-center text-3xl text-white">
          ,
        </div>
        <div className="w-[60px] h-[60px]  rounded-full flex justify-center items-center text-3xl text-white bg-orange-500 pb-1">
          =
        </div>
      </div>
    </div>
  );
}
