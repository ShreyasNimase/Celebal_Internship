import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="*" element={<h1>PAGE NOT FOUND !</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
