import { useState } from "react"
const Counter = () => {
    const [count,setCount] = useState(0)
    // const count = myStateArray[0]
    // const setcount = myStateArray[1]
  return (
    <div style={{textAlign : "center"}}>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Inc Count</button>
    </div>
  )
}

export default Counter
