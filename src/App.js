import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sentences from "./pages/Sentences";

import "./css/header.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/sentences" exact={true} element={<Sentences />} />
      </Routes>
    </div>
  );
}

export default App;
