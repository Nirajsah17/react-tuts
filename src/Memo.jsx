import { useState, useMemo, use } from "react"



export function Memoization (){

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // const expensiveCalculation = ()=>{
  //   console.log("Computing ....");
  //   let sum = 0;
  //   for(let i=0; i < 1e8; i++){
  //     sum+=1;
  //   }
  //   return sum;
  // }
  const memoizedResulttt = useMemo(()=>{
    console.log("Computing ....")
    let sum = 0 ;
     for(let i = 0; i < 1e8; i++){
      sum += 1;
     }
     return sum;
  }, [count])
  return (
    <>
    <h2> Count : {count}</h2>
    <button onClick={()=> setCount(prev=> prev + 1)}> Increment </button>

    <input value={text} onChange={(e)=> setText(e.target.value)}></input>
    <h2>Expensive Result : {memoizedResulttt}</h2>
    </>
  )
}