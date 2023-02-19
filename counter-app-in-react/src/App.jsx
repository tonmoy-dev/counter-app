import { useState } from "react";
import SimpleCounter from "./components/SimpleCounter";
import ComplexCounter from "./components/ComplexCounter";
// import './App.css'

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <ComplexCounter />
    </div>
  );
}

export default App;
