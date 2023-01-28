import React from "react";
import styles from "../styles";
import Button from "./Button";

const Cta = () => {
  return (
    <section className={`flex justify-between items-center feature-card rounded-[20px] flex-col ss:flex-row my-8 p-10`}>
      <div>
        <h2 className={`${styles.heading2}`}>Try our services now</h2>
        <p className={`${styles.paragraph} flex max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet
        </p>
      </div>
      <Button content="Get Started" style="mt-8" />
    </section>
  );
};

export default Cta;
