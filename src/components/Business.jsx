import React from "react";
import styles from "../styles";
import {Button} from '../components'

import { features } from "../constants";

const Business = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-col mt-10 gap-4 ss:flex-row`}
    >
      <div className={`${styles.flexStart} flex flex-1 flex-col`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your life by building
          credit, earning rewards, and saving money. But with handreds of credit
          cards on the market, you've got to make the right choice.
        </p>
        <Button content='Get Started'/>
      </div>
      <div className={`${styles.flexStart} flex flex-1 flex-col`}>
        {
          features.map((feature,index)=>{
            return (

         <div key={feature.id} className={`${index===1 ? 'bg-black-gradient-2 rounded-xl': ''} max-w-[470px] flex flex-row justify-center px-6 my-3 ss:my-6 gap-8 items-center`} >
           <div className="h-[78px] w-[125px] flex flex-row items-center justify-center px-3 rounded-full bg-business-icon ">
            <img src={feature.icon} className='h-[32px] w-[32px] object-contain' alt={feature.title} />
           </div>
           <div className={`flex flex-col justify-center py-3`}>
             <h4 className="text-white text-[18px] font-poppins font-normal">
                {feature.title}
             </h4>
             <p className={` font-poppins font-normal text-dimWhite text-[14px] leading-[25.8px]`}>
              {feature.content}
             </p>
           </div>
         </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Business;
