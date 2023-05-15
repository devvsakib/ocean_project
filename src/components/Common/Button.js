import React from 'react'

const Button = ({content}) => {
  return (
    <button className='bg-gradient-to-r from-[#FFA500] to-[#FF5C3D] transition-all duration-150 ease-linear px-6 py-2 rounded-full z-10'>{content}</button>
  )
}

export default Button