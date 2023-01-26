import React from "react";

const Button = (props) => {
  return (
    <button className={`text-primary ${props.style} capitalize text-center text-[18px] outline-none rounded-md px-6 py-4 font-poppins font-medium bg-blue-gradient`}>
      {props.content}
    </button>
  );
};

export default Button;
