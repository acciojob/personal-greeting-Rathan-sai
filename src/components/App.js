import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [text, setText] = useState("");

  // var text = "ram";

  const handleChange = (e) => {
    console.log("Hello " + e.target.value + "!");
    if (e.target.value === "") {
      setText("");
      return;
    }
    setText("Hello " + e.target.value + "!");
  };

  return (
    <div>
      <input onChange={handleChange}></input>
      <p>{text}</p>
    </div>
  );
};

export default App;
