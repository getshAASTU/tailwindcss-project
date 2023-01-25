import React from "react";
import { discount, robot } from "../assets";
import styles from "../styles";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`${styles.flexStart} flex-1 flex-col px-6 xl:px-0 sm:px-16`}
    >
      <div className="flex flex-row gap-4 items-center py-[6px] px-4 bg-discount-gradient mb-2 rounded-[10px]">
        <img src={discount} alt="discout" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">
            20% </span> discount for {" "} <span className="text-white"> 1 month</span> Account
        </p>
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <h1 className="flex-1 font-poppins font-semibold text-white ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          The Next <br className="hidden sm:block "/> {" "}
          <span className="text-gradient">
          Generation
          </span> {" "}
           Payment Method
        </h1>
        <div className="ss:flex hidden mr-4 md:mr-0">
          <GetStarted/>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
