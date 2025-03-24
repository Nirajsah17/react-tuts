import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export function Tabs(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/carrier" Component={Carrier}></Route>
        </Routes>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/carrier">Carrier</Link>
        </nav>
      </BrowserRouter>
    </>
  );
}



function Home(){
  return (
    <>
    <h1> Home Page</h1>
    <p>Hey What's up</p>
    </>
  )
}

function About(){
  return (
    <>
      <h1>About Page</h1>
      <p>I don't Know</p>
    </>
  )
}


function Carrier(){
  return (
    <>
    <h1>Carreers Page</h1>
    <p>Let's See</p>
    </>
  )
}