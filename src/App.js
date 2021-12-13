import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Project from "./components/Project.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/project' element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
