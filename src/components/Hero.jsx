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
          <span className="text-white">20% </span> discount for{" "}
          <span className="text-white"> 1 month</span> Account
        </p>
      </div>
      <div className="flex flex-row  w-full justify-between items-center">
        <h1 className="flex-1 font-poppins font-semibold text-white ss:text-[52px] text-[52px] ss:leading-[100.8px] leading-[75px]">
          The Next <br className="hidden sm:block " />{" "}
          <span className="text-gradient">Generation</span> Payment Method.
        </h1>
        <div className="ss:flex self-start hidden mr-4 md:mr-0">
          <GetStarted/>
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} my-10 md:my-0 relative`}>
      <img
        src={robot}
        alt="robot"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] top-0 w-[40%] h-[35%] pink__gradient" />
      <div className="absolute z-[1] bottom-40 rounded-full w-[80%] h-[80%] white__gradient" />
      <div className="absolute z-[0] bottom-20 w-[50%] h-[50%] blue__gradient" />
    </div>
    <div className={` ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
);

export default Hero;
