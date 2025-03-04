import React from 'react'
import './Button.scss'

const Button = ({label, type = null, onClick = null}) => {
  return (
    <button type={type} className='button'>{label}</button>
  )
}

export default Button