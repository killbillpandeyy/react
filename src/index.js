// const { createElement } = require("react");

import React from "react";
import ReactDom from "react-dom";
/* this module acts as a compiler which converts
written html to js files.Babel is a javascript compiler converts next gen
js to browser compatible js*/
// var ReactDom = require("react-dom");
import App from "./App";

// ReactDom.render(WHAT TO SHOW,WHERE TO SHOW,CALLBACK(OPTIONAL))
// Render inputs only a single line of HTML
ReactDom.render(<h1>HELLOOO</h1>, document.getElementById("root"));
// React works by creating jsx files where we write HTML in the body of
// JS Files.
//TRADITIONAL JS METHOD
var h1 = document.createElement("h1");
h1.innerHTML = "HELLO WORLD!";
document.getElementById("root").appendChild(h1);

ReactDom.render(
  <div>
    <h1>HELLOOO</h1>
    <p>PARAGRAPH</p>
  </div>,
  document.getElementById("root")
);
// -----------------------------------------
//TASK1
//var React=require("react")
// var ReactDom=require("react-dom")
ReactDom.render(
  <div>
    <h1>MY FAV FOOD</h1>
    <ul>
      <li>BIRYANI</li>
      <li>XXX</li>
      <li>YYY</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//-----------------------------------------------
const name = "SANDEEP";
// {} can be used to use JS expressions but not statements in HTML
ReactDom.render(
  <div>
    <h1>HElo {name}</h1>
    {/* <h1>HELLO {`${name} ${name}`}</h1> */}
    <p>ur number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

//-------------------------------------------------
//TASK 3
const date = new Date();
// IN JSX FILES USE className instead of class
// Also change type of file from javascript to JSX in index.html
//Use camelcase for attributes of html and self closing tags should have closing tag
// inline styling done using JSON objects
const custom = {
  color: "blue",
  fontFamily: "sans-serif",
  border: "1px solid black"
  // here for attributes camel case should be used instead of hyphen(-)
};
custom.color = "pink"; /*changing properties of json object */
ReactDom.render(
  <div>
    <h1 className="heading">copyright {date.getFullYear()}</h1>
    <div>
      <img src="./imggg.jpeg" alt="No img"></img>
      <img
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.bestrecipes.com.au%2FiyddCRce%2Fbr%2F2019%2F02%2F1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg&tbnid=ffZNbU75Q1Y8NM&vet=12ahUKEwi4xIfpvr3_AhXwMrcAHQ4ZA44QMygzegQIARBt..i&imgrefurl=https%3A%2F%2Fwww.bestrecipes.com.au%2Fbudget%2Fgalleries%2F40-mouth-watering-recipes-fast-food-twist-indian-vegetarian-greek%2F9euiydza&docid=2X2brp6cZXy4MM&w=1980&h=1320&q=food%20images&ved=2ahUKEwi4xIfpvr3_AhXwMrcAHQ4ZA44QMygzegQIARBt"
        alt="no"
      />
    </div>
    <h1 style={{ color: "red", fontFamily: "roboto" }}>INLINE Styling</h1>
    <h1 style={custom}>custom Styling</h1>
    {/* outer bracket is to specify it is js element,inner for json object */}
  </div>,
  document.getElementById("root")
);
// -------------------------------------------------
// TASK_4
// import react from "react"
// import ReactDOM from "react-dom"
const time = new Date();
const hr = time.getHours();
var greet = "Morning";
var customstyle = {
  color: "red"
};
if (hr >= 12 && hr <= 18) {
  customstyle.color = "green";
  greet = "Afnoon";
} else if (hr >= 18) {
  customstyle.color = "blue";
  greet = "Evening";
}
ReactDom.render(
  <h1 style={customstyle}>Good {greet}!</h1>,
  document.getElementById("root")
);
// --------------------------------------------
// REACT COMPONENTS- to reuse the same functionality
// convention of function name in pascal case
// https://github.com/airbnb/javascript/tree/master/react
ReactDom.render(<App />, document.getElementById("root"));
