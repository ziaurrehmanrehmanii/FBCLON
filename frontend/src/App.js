import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//////////////////////////////
///      Component

import NavBar from "./Component/NavBar/NavBar";
import Home from "./Component/Home/Home";
import Login from "./Component/Auth/Login/Login";
import Register from "./Component/Auth/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
