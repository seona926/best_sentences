import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sentences from "./pages/Sentences";
import SentenceWrite from "./pages/SentenceWrite";
import Register from "./pages/Register";
import SentenceDetail from "./pages/SentenceDetail";
import Signin from "./pages/Signin";

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
        <Route path="/register" exact={true} element={<Register />} />
        <Route
          path="/sentences/detail"
          exact={true}
          element={<SentenceDetail />}
        />
        <Route path="/signin" exact={true} element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
