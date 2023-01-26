import React from "react";
import styles, { layout } from "../styles";
import { bill, google, apple } from "../assets";

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImg} object-cover w-[100%] h-[100%]`}>
        <img src={bill} alt="bill" />
        <div className="rounded-full absolute top-0 -left-1/2 h-[50%] w-[50%] z-[3] white__gradient"/>
        <div className="rounded-full absolute bottom-0 -left-1/2 h-[50%] w-[50%] z-[0] pink__gradient"/>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2}`}>
          Easily control your <br  className="hidden sm:block"/> billing & invoicing.
        </h4>
        <p className={`${styles.paragraph} max-w-[470px] mt-8`}>
          modi consectetur ullam velit repellendus iusto
          molestiae optio nesciunt, explicabo eius nam sequi fugiat labore quod
          vel ipsam iure.
        </p>
        <div className={`flex flex-row flex-wrap sm:mt-6 mt-2`}>
          <img src={google} alt=""  className="w-[128px] h-[42px] mr-5 object-contain cursor-pointer"/>
          <img src={apple} alt="" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
      </div>
      <div className="">

      </div>
    </section>
  );
};

export default Billing;
