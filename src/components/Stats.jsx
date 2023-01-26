import React from "react";
import styles from "../styles";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-6`}>
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className={`text-white relative flex flex-row m-3 justify-start items-center flex-1`}
          >
            <h4 className="font-poppins font-semibold text-[30px] text-white leading-[43px] xs:text-[40px] xs:leading-[53px]">
              {stat.value}{" "}
            </h4>
            <p className="font-poppins font-normal ml-3 uppercase  text-[15px] leading-[21px] xs:text-[20px] xs:leading-[26px] text-gradient">
              {stat.title}
            </p>
            <div
              className={`${
                index === stats.length - 1 ? "hidden" : "block"
              } rounded-full absolute right-[4%] ml-3 w-[5px] h-[50%] border-color`}
            ></div>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
