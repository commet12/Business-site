import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`px-6 py-4 font-poppins font-medium text-[18px] bg-blue-gradient text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button