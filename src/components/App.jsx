import React, { useState } from "react";

function App() {
  const [HeadingText, setHeadingText] = useState("Hallo");

  const [ismouseover, setismouseover] = useState(false);

  function Handlehead() {
    setHeadingText("Summited");
  }

  function handlemouseover() {
    setismouseover(true);
  }

  function onmouseonhandle() {
    setismouseover(false);
  }

  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ismouseover ? "black" : "white" }}
        onMouseOver={handlemouseover}
        onMouseOut={onmouseonhandle}
        onClick={Handlehead}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
