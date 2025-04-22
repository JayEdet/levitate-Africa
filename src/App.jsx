import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Vision from "./pages/Vision";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Vision" element={<Vision />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
