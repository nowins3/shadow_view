import "./assets/css/App.css";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Brokers from "./pages/Brokers";
import More from "./pages/More";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/brokers" element={<Brokers />}></Route>
        <Route path="/more" element={<More />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
