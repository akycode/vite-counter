// import React from 'react'
const AppleBasket = ({ AppleCounter, basketname }) => {
  return (
    <div className='basket-1'>
     <h1>
    <span>{AppleCounter}</span>    
    </h1> 
    <p>{basketname}</p>
    </div>
  )
}
export default AppleBasket

