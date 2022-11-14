import React, {useState } from "react";
import Input from "./Input";
export default function App(){
  const [firstInput, setFirstInput] = useState("");
  const [first1Input, setFirst1Input] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  
     return(
    <center>
      <b><h1>REUSABLE COMPONENTS</h1></b>
    <div classname="App">
      <Input 
      setInputValue={setFirstInput}
      InputValue={firstInput}
      inputType="text"
     />
      <Input 
      setInputValue={setFirst1Input}
      InputValue={first1Input}
      inputType="text"
     />
     <Input 
      setInputValue={setSecondInput}
      InputValue={secondInput}
      inputType="number"
     />
     <Input 
      setInputValue={setThirdInput}
      InputValue={thirdInput}
      inputType="text"
     />
     <div>
       <p>First Name: {firstInput}</p>
       <p>Last Name: {first1Input}</p>
       <p>Age: {secondInput}</p>
       <p>Address: {thirdInput}</p>
     </div>
    </div>
    </center>
  );
}
