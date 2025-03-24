import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom"

export function NestedRoute(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard/>}>
            <Route path="stats" element={<Stats/>}></Route>
            <Route path="settings" element={<Settings/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export function DashBoard(){
  return (
    <>
    <h1>Dashboard</h1>
    <nav>
      <Link to="stats">Stats</Link>
      <Link to="settings">Settings</Link>
    </nav>
    <Outlet></Outlet>
    </>
  )
}

function Stats(){
  return (
    <>
    <h1>Stats</h1>
    </>
  )
}

function Settings(){
  return (
    <>
    <h1>Settings</h1>
    </>
  )
}