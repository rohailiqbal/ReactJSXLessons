import React from "react";
import ReactDOM from "react-dom";

const fName = "Rohail";
const lName = "Iqbal";
const luckyNo = 1;
ReactDOM.render(
<div>
<h1>Hello {fName + " " + lName}!</h1>
<h3>ES6 Syntax: {`${fName} ${lName}`}</h3>
<p>My lucky number is: {Math.floor( Math.random() * 10)}</p>
</div>  
  , document.getElementById("root"));
