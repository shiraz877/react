import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    async function githubUser() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      console.log("hello");

      setUser(data);
    }
    githubUser();
  }, []);

  //this will run infinite times
  //   async function githubUser() {
  //     const response = await fetch("https://api.github.com/users");
  //     const data = await response.json();
  //     console.log("hello");

  //     setUser(data);
  //   }
  //   githubUser();

  return (
    <>
      <h1>GitHub Users</h1>
      {users.map((user) => {
        return <img src={user.avatar_url} width={100} height={100} />;
      })}
    </>
  );
}
