import { useState } from "react";
import SimpleCounter from "./components/SimpleCounter";
// import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SimpleCounter />
      </div>
    </Provider>
  );
}

export default App;
