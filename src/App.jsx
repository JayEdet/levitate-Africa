import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import Project from "./pages/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
