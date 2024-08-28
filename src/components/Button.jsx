import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='bg-gray-300 px-5 py-2 rounded-lg font-bold'>{props.name}</button>
    </div>
  )
}

export default Button