import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Project from "./components/Project";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
