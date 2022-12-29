import React, { useEffect } from "react";
// import styles from "./TextCycle.module.css";

type TextCycleProps = {
  cycleText: string[];
  secondDelay?: number;
};
const TextCycle = (props: TextCycleProps) => {
  // seconds each text will appear in cycle
  const secondDelay = props.secondDelay || 3;

  return (
    <div className="grid w-full">
      <style jsx>
        {`
        @keyframes rotateWord {
          0% {
            opacity: 0;
          }
          2% {
            opacity: 0;
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
          }
          5% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
          17% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
          20% {
            opacity: 0;
            -webkit-transform: translateY(30px);
            transform: translateY(30px);
          }
          80% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
          @-webkit-keyframes rotateWord {
            0% {
              opacity: 0;
            }
            2% {
              opacity: 0;
              -webkit-transform: translateY(-30px);
            }
            5% {
              opacity: 1;
              -webkit-transform: translateY(0px);
            }
            17% {
              opacity: 1;
              -webkit-transform: translateY(0px);
            }
            20% {
              opacity: 0;
              -webkit-transform: translateY(30px);
            }
            80% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
      {props.cycleText.map((text, index) => (
        <span
          style={{
            top: "0",
            float: "left",
            gridRowStart: "1",
            gridColumnStart: "1",
            opacity: "0",
            display: "inline",
            animation: `rotateWord ${
              secondDelay * props.cycleText.length
            }s linear infinite ${index * secondDelay}s`,
          }}
          key={text}
        >
          {text}
        </span>
      ))}{" "}
    </div>
  );
};

export default TextCycle;
