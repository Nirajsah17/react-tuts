export function ProtectedRoute({children}){
  const isAuthenticated = true;
  return isAuthenticated ? children : <Restricted/>; 
}

function Restricted(){
  return (
    <>
    <h1>Hey, You don't have to access to this Page</h1>
    </>
  )
}