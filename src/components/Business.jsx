import React from "react";
import styles from "../styles";
import { layout } from "../styles";
import { Button } from "../components";

import { features } from "../constants";
const FeatureCard = ({ icon, title, content,id,index }) => {
  return (
    <div
      className={` ${index!==features.length-1 ? 'mb-6' : 'mb-0'} feature-card rounded-[20px] flex flex-row gap-4  items-center justify-center p-6`}
    >
      <div className={`h-[64px] w-[64px] ${styles.flexCenter}  rounded-full bg-dimBlue`}>
        <img
          src={icon}
          className="h-[50%] w-[50%] object-contain"
          alt={title}
        />
      </div>
      <div className={`flex flex-1 flex-col justify-center py-3`}>
        <h4 className="text-white text-[18px] font-poppins font-normal">
          {title}
        </h4>
        <p
          className={` font-poppins font-normal text-dimWhite text-[14px] leading-[25.8px]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2} hidden sm:block`}>
          You do the business, <br />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your life by building
          credit, earning rewards, and saving money. But with handreds of credit
          cards on the market, you've got to make the right choice.
        </p>
        <Button content="Get Started" style="mt-8" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          return <FeatureCard key={feature.id} index={index} {...feature} />;
        })}
      </div>
    </section>
  );
};

export default Business;
