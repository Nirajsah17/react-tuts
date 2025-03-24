import { SwitchTheme } from './hooks/usestate'
import { UserList } from './hooks/useeffect'
import { ReducerCounter } from './hooks/usereducer'
import { SecondReducerCounter } from './hooks/usereducer'
import { Tabs } from './router/basic'
import { DTabs } from './router/dynamic_routing'
import { NestedRoute } from './router/nested_route'
import { ProtectedRoute } from './router/protected_route'
import { useTitle } from './hooks/custom/useTitle'
import { use, useState } from 'react'
import { useCounter } from './hooks/custom/useCounter'
function App() {
  const [count, setCount] = useState(0);
  // useTitle(count);
  const [counter, increment, decrement, reset] = useCounter(0)
  return (
    <>
      {/* <SwitchTheme></SwitchTheme> */}
      {/* <UserList></UserList> */}
      {/* <ReducerCounter></ReducerCounter> */}
      <hr></hr>
      {/* <SecondReducerCounter></SecondReducerCounter> */}

      {/* <Tabs></Tabs> */}
      {/* <DTabs></DTabs> */}
      {/* <NestedRoute></NestedRoute> */}
      {/* <ProtectedRoute>
        <NestedRoute></NestedRoute>
      </ProtectedRoute> */}
      {/* <button onClick={() => setCount(count + 1)}>Counter</button> */}
      <p>{counter}</p>
      <button onClick={()=>increment()}>increment</button>
      <button onClick={()=> decrement()}>decrement</button>
      <button onClick={()=> reset()}>reset</button>
    </>
  );
}

export default App
