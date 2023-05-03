import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Service from "./Routes/Service";
import About from "./Routes/About";
import Sustainablity from "./Routes/Sustainablity";
import Investors from "./Routes/Investors";
import Media from "./Routes/Media";
import Careers from "./Routes/Careers";
import Contact from "./Routes/Contact";
export default function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainablity" element={<Sustainablity />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/media" element={<Media />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
