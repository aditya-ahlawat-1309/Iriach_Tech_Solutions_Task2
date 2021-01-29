import React ,{Component} from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function getValue() {
  // get the value inside of the textbox
  let value = document.getElementById("text").value;

  // log it!
  console.log(value);

  // if it's null, send text "null value", otherwise, send the actual value
  if (value) {
    document.getElementById("output").innerHTML = "Correct Value : 7";
  } else {
    document.getElementById("output").innerHTML = " Enter some value";
  }
}

function App() {

 return (
    <React.Fragment>

      <input type="text" name="text" id="text" placeholder="1,2,3,4,5,6,? "/>
      <button classname="btn btn-primary sm m-2" type="button" onClick={() => getValue()}>
        Get value
      </button>
      <span id="output" />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
