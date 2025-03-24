import { useEffect, useState } from "react";

export function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("one:: ", response);
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);


  useEffect(()=>{

    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const params = new URLSearchParams({
      param1: "",
      param2: ""
    });

    const url = new URL(baseURL);
    url.search = params.toString();
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key1: "niraj",
        key2: "pravin",
      }),
    }).then(response=> response.json()).then(data=> console.log(data)).catch(err=> console.log(err));
  })

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </>
  );
}
