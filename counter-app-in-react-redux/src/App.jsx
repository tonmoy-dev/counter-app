import { useState } from "react";
import SimpleCounter from "./components/SimpleCounter";
import ComplexCounter from "./components/ComplexCounter";
// import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SimpleCounter />
        <ComplexCounter />
      </div>
    </Provider>
  );
}

export default App;
