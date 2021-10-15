
import "./Taskone.css";
import React, { useState } from "react";


function Taskone() {
  const [text, setText] = useState(true);
  return (
    <div>
     { text &&<h1> hiiiiiiii</h1>}
      <button className="button" onClick={() => setText(!text)}>
        Press me
      </button>
    </div>
  );
}

export default Taskone;
