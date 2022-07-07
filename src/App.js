import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./css/layout.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
