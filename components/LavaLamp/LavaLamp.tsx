import React from "react";
import Image from "next/image";
import styles from "./LavaLamp.module.css";
/* 
    Credit to Leimapapa for the lava lamp SVG
    https://codepen.io/leimapapa/pen/QWQKVvQ
*/

export const LavaLamp = () => {
  return (
    <div className="flex min-w-full min-h-full">
      <div className={styles.lamp}>
        <div className={styles.glass}>
          <div className={styles.lava}>
            <div className={styles.blob} />
            <div className={styles.blob} />
            <div className={styles.blob} />
            <div className={`${styles.topBlob}`} />
            <div className={`${styles.bottomBlob}`} />
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LavaLamp;
