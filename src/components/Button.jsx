import React from 'react'

const Button = (props) => {
  return (
    <button className='text-primary capitalize text-center rounded-md px-3 py-2 my-6 font-poppins font-semibold bg-blue-gradient '>{props.content}</button>
  )
}

export default Button