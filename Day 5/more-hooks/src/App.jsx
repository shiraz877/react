import { useState } from "react";
import Child from "./Child";

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
     
      {/* <Child name="shiraz" /> */}
      <h1>count: {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increament</button>
    </>
  );
}

export default App;
