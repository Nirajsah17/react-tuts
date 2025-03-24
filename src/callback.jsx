import { useState } from "react"

export function CallBack(){

  const [count, setCount] = useState(0);



  return (
  <>
  <h2>{count}</h2>
  <button onClick={()=> setCount(prev > prev + 1)}>Counter</button>
  </>

)
}