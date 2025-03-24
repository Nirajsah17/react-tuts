import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

export function DTabs() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/carrier">Carrier</Link>
          <Link to="/users/John">User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/carrier" element={<Carrier />}></Route>
          <Route path="/users/:name" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <>
      <h1> Home Page</h1>
      <p>Hey What's up</p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>I don't Know</p>
    </>
  );
}

function Carrier() {
  return (
    <>
      <h1>Carreers Page</h1>
      <p>Let's See</p>
    </>
  );
}

function Users() {
   const navigate = useNavigate();
   const openUser = () => {
     navigate("/users/sheldon cooper");
   };

  const { name } = useParams();
  return (
    <>
      <button onClick={openUser}>big bang</button>
      <h1>User Page </h1>
      <p>Hello user | {name}</p>
    </>
  );
}
