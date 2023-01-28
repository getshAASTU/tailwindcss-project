import React from "react";
import { feedback } from "../constants";
import styles, { layout } from "../styles";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative` }
    >
      <div className="blue__gradient rounded-full absolute -right-[50%] w-[60%] h-[60%]" />
      <div className={`${layout.section} ${styles.flexCenter}`}>
        <h2 className={`${styles.heading2} flex flex-1 `}>
          What people are <br className="hidden sm:block" />
          saying about us.
        </h2>
        <p className={`${styles.paragraph} flex flex-1`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet
        </p>
      </div>
      <div className={`${layout.section} ss:-my-12 flex flex-1 flex-wrap`}>
        {feedback.map((singleFeedback) => {
          return <FeedbackCard key={singleFeedback.id} {...singleFeedback} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
