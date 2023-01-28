import React from "react";
import styles, { layout } from "../styles";
import { quotes } from "../assets";

const FeedbackCard = ({content, name, title, img }) => {
  return (
    <section
      className={`flex flex-col rounded-[20px] max-w-[370px] px-5 mr-0 ss:mr-10 flex-1 ${styles.flexStart} feedback-card ${styles.paddingY}`}
    >
      <img
        src={quotes}
        alt="quotes"
        className="h-[48px] w-[48px] object-contain"
      />
      <p className={`${styles.paragraph} my-10`}>
        {content}
      </p>
      <div
        className={`flex flex-row`}
      >
        <img src={img} alt={name} className="rounded-[50px]" />
        <div className="flex flex-col ml-4">
          <h5 className="text-white text-[18px] font-poppins font-normal">
            {name}
          </h5>
          <p className={`${styles.paragraph}`}>{title}</p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCard;
