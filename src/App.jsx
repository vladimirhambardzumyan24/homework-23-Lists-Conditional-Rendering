import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        type="text"
        onChange={(evn) => {
          setValue(evn.target.value);
        }}
      />
    </div>
  );
}

export default App;
//
