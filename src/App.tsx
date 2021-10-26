import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProductsList } from "./Components/ProductsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductsList />
      </header>
    </div>
  );
}

export default App;
