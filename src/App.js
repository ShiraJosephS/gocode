import logo from "./logo.svg";
import "./App.css";

import { Icon } from "@iconify/react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
