import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex gap-4'>
        <Button name='All'/>
        <Button name='Gaming'/>
        <Button name='Coding'/>
        <Button name='Stocks'/>
        <Button name='Movies'/>
        <Button name='Tv-Shows'/>
        <Button name='Music'/>
        <Button name='Indian'/>
    </div>
  )
}

export default ButtonList