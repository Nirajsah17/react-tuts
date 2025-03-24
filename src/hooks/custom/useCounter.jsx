import { useState, useEffect } from "react";

export function useCounter(initialState = 0 ) {
  const [counter, setCounter] = useState(initialState);

  function increment(){
    setCounter(counter + 1);
  }

  function decrement(){
    setCounter(counter -1);
  }

  function reset(){
    setCounter(initialState);
  }

  return [counter, increment, decrement, reset]
}