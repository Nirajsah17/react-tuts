import { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action)=>{
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState
    default :
      return state;
  }
}

export function ReducerCounter(){
  const [counter, setCounter]  = useReducer(reducer, initialState);
  return (
    <>
      <div>Conter  : {counter}</div>
      <button onClick={()=> setCounter('increment')}>Increment</button>
      <button onClick={()=> setCounter('decrement')}>Decrement</button>
      <button onClick={()=> setCounter('reset')}>Reset</button>
    </>
  )
}



const initalStateSecond = {
  secondCounter: 0
}

const secondReducer = (state, action)=>{
  console.log(action, state)
  switch(action.type){
    case "increment":
      return {secondCounter: state.secondCounter + 1}
    
    case "decrement":
      return {secondCounter: state.secondCounter - 1}
    
    case "reset":
      return initalStateSecond
    default:
      return state;
  }
}


export function SecondReducerCounter(){

  const [secondCount, dispatch] = useReducer(secondReducer, initalStateSecond);

  return (
    <>
    <div>Counter : {secondCount.secondCounter}</div>
    <button onClick={()=> dispatch({type: 'increment'})}>increment</button>
    <button onClick={()=> dispatch({type: 'decrement'})}>decrement</button>
    <button onClick={()=> dispatch({type: 'reset'})}>reset</button>
    </>
  )
}


// UseFull when having more complex state.
// Help in writting cleaner and modular code.
// Mostly used when state is an array of object.
// More number of state transition.
// Complex business logic.
// Can be used for Global state.