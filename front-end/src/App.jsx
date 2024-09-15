import React from "react";
import Home from "./pages/Home";
import BsState from "./context/BsState";

function App() {
  return (
    <div>
      <BsState>
        <Home />
      </BsState>
    </div>
  );
}

export default App;
