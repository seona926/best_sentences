import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sentences from "./pages/Sentences";
import SentenceWrite from "./pages/SentenceWrite";

import "./css/header.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/sentences" exact={true} element={<Sentences />} />
        <Route
          path="/sentences/write"
          exact={true}
          element={<SentenceWrite />}
        />
      </Routes>
    </div>
  );
}

export default App;
