import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Profile } from "./pages/Profile";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Shreyas");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />}></Route>
          <Route
            path="/Profile"
            element={<Profile username={username} setUsername={setUsername} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="*" element={<h1>PAGE NOT FOUND !</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
