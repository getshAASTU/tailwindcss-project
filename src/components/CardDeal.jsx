import React from "react";
import styles, { layout } from "../styles";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal,
          <br className="hidden sm:block" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum
          suscipit sit deleniti aperiam minima vel ratione, eligendi ipsum
          praesentium?
        </p>
        <Button content="Get Started" style="mt-8" />
      </div>
      <div className={`${layout.sectionImg} object-cover w-[100%] h-[100%]`}>
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
