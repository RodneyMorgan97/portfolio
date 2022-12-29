import React from "react";

/* 
    Credit to Leimapapa for the lava lamp SVG
    https://codepen.io/leimapapa/pen/QWQKVvQ
*/

// type LampProps = {
//   style: React.CSSProperties;
// };

export const LavaLamp = () => {
  // export const LavaLamp = ({ style }: LampProps) => {
  return (
    <svg className="lamp" width="100%" height="auto" viewBox="-21 0 100 125">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="4"
            result="color-matrix-blur"
          ></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -8"
            result="color-matrix-filter"
          ></feColorMatrix>
          <feComposite
            in="SourceGraphic"
            in2="filter"
            operator="atop"
          ></feComposite>
        </filter>
        <linearGradient id="glass" gradientTransform="rotate(0)">
          <stop offset="5%" stopColor="rgba(42,157,143,1)" />
          <stop offset="95%" stopColor="rgba(42,157,143,1)" />
        </linearGradient>
        <linearGradient id="silver" gradientTransform="rotate(0)">
          <stop offset="15%" stopColor="rgb(102,102,102)" />
          <stop offset="95%" stopColor="rgb(192,192,192)" />
        </linearGradient>
      </defs>

      <path
        fill="url(#glass)"
        d="M 21 19 C 19 29 6 68 9 75 L 12 83 Q 30 88 48 83 L 51 75 C 54 68 41 29 39 19 Q 30 21 21 19"
        stroke="#ccc"
        strokeWidth=".3"
      />
      <g className="gloops" filter="url(#goo)">
        <ellipse rx="10%" ry="10%" className="circle" fill="rgb(205,46,43)">
          <animate
            attributeName="cx"
            values="28%; 33%; 28%"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="16%; 69%; 16%"
            dur="12.2s"
            repeatCount="indefinite"
            keyTimes="0;0.6;1"
          />
          <animate
            attributeName="rx"
            values="7%; 4%; 7%"
            dur="10.4s"
            begin="-1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="7%; 4%; 7%"
            dur="19.4s"
            begin="-3"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="rgb(225,66,43); rgb(205,46,43); rgb(225,66,43)"
            dur="10s"
            begin="-1"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse r="10%" className="circle" fill="rgb(205,46,43)">
          <animate
            attributeName="cx"
            values="28%; 33%; 28%"
            dur="11.2s"
            begin="-12"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="16%; 69%; 16%"
            dur="14.1s"
            begin="-4"
            repeatCount="indefinite"
            keyTimes="0;0.6;1"
          />
          <animate
            attributeName="rx"
            values="7%; 4%; 7%"
            dur="9.4s"
            begin="-5"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="7%; 4%; 7%"
            dur="10.4s"
            begin="-3"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="rgb(225,66,43); rgb(205,46,43); rgb(225,66,43)"
            dur="10s"
            begin="-1"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse r="10%" className="circle" fill="rgb(205,46,43)">
          <animate
            attributeName="cx"
            values="28%; 33%; 28%"
            dur="11.7s"
            begin="-6"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="16%; 69%; 16%"
            dur="16.4s"
            begin="-9"
            repeatCount="indefinite"
            keyTimes="0;0.6;1"
          />
          <animate
            attributeName="rx"
            values="7%; 4%; 7%"
            dur="7.4s"
            begin="-4"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="7%; 4%; 7%"
            dur="13.4s"
            begin="-5"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="rgb(225,66,43); rgb(205,46,43); rgb(225,66,43)"
            dur="10s"
            begin="-1"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="30" cy="18" rx="7" ry="4" fill="rgb(225,66,43)" />
        <ellipse cx="30" cy="87" rx="15" ry="10" fill="rgb(225,46,43)" />
      </g>
      <path
        fill="url(#silver)"
        d="M 25 1 L 21 19 Q 30 21 39 19 L 35 1 Q 30 0 25 1"
        stroke="#ccc"
        strokeWidth=".5"
      />
      <path
        fill="url(#silver)"
        d="M 12 83 L 19 100 Q 30 102 41 100 L 48 83 Q 30 88 12 83"
        stroke="#ccc"
        strokeWidth=".5"
      />
      <path
        fill="url(#silver)"
        d="M 19 100 L 8 119 Q 30 130 52 119 L 41 100 Q 30 102 19 100z"
        stroke="#ccc"
        strokeWidth=".5"
      />
    </svg>
  );
};

export default LavaLamp;
