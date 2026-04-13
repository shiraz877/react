import { useState } from "react";

export default function App() {
  // let count = 0;
  // function increament(){
  //   count++;
  //   console.log(count);
    
  // }
  //  function decreament(){
  //   count--;
  //   console.log(count);
    
  // }

  // UI not getting update

 const [count,setCount]= useState(0)

 function increament(){
  setCount(count+1)
 }
 function decreament(){
  setCount(count-1)
 }
  return (
    <>
      <button onClick={decreament} style={{backgroundColor:"gray", fontSize:"30px", padding:"20px", color:"white" }}>-</button>
      <h1>Counter:{count}</h1>
      <button onClick={increament} style={{backgroundColor:"gray", fontSize:"30px", padding:"20px", color:"white" }}>+</button>
    </>
  );
}
