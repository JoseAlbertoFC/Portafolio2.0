import { Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Navbar from "./components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
