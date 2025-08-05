// Declarative Programing
import Button from "./Button"
import rightArrow from './right-arrow.png'
import leftArrow from './left-arrow.png'
import './Applecounter.css'
import AppleBasket from './AppleBasket'
import { useState } from "react"
// import { createRoot } from 'react-dom/client'



const AppleCounter = () => {

  const totalApplecount = 10
  const [RightApplecount,setRightApplecount] = useState(0)
  // let RightApplecount = 0
    const [leftAppletcount,setleftApplecount] = useState(totalApplecount - RightApplecount)
  // let leftAppletcount = totalApplecount - RightApplecount


   const rightClickHandler = ()=>{
    if (leftAppletcount>0) {
      setRightApplecount(RightApplecount+1)
      setleftApplecount(leftAppletcount-1)
      console.log(RightApplecount)
    }
  }


  const leftClickHandler = ()=>{
    if (RightApplecount>0) {
      setRightApplecount(RightApplecount-1)
      setleftApplecount(leftAppletcount+1)
      console.log(leftAppletcount)
    }
    // console.log('left')
  }
 


  return (
    <section>
      <div className="counter-row">
        <AppleBasket AppleCounter={leftAppletcount} basketname='basket-1 '/>
        <Button clickhandler = {leftClickHandler} imageurl={leftArrow} buttonName = 'left-arrow' />
        <Button clickhandler = {rightClickHandler} imageurl={rightArrow} buttonName = 'right-arrow'/>
        <AppleBasket AppleCounter={RightApplecount} basketname='basket-2' />
      </div>
    </section>
  )
}

export default AppleCounter