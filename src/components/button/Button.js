import React from 'react'
import "./Button.scss"
const Button = (props) => {
  return (
    <>
    <button className='btn-user px-3 py-2 text-capitalize  text-white mt-2'>{props.label}</button>
   </>
  )
}

export default Button