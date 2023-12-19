import { Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Navbar from "./components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1>
        Super Portafolio Ultrainstinto modo Sabio, Jokage de la aldea escondida
        entre los Programadores, creador de Empleos!!!!
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
