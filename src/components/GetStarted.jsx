import React from "react";
import { arrowUp } from "../assets";
import styles from "../styles";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} rounded-full bg-blue-gradient h-[140px] w-[140px] p-[2px] cursor-pointer`}
    >
      <div
        className={`bg-primary rounded-full w-[100%] h-[100%] flex flex-col ${styles.flexCenter} `}
      >
        <div className={`flex flex-row ${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>{" "}
          </p>
            <img
              src={arrowUp}
              alt="arrow"
              className="w-[23px] h-[23px] ml-2 object-contain"
            />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
