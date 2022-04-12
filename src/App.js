import "./App.css";
import Banner from "./components/Banner/Banner";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import ProjectWrapper from "./components/projects/ProjectWrapper";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path="/" element={<Banner />} />
              <Route path="/project" element={<ProjectWrapper />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>,

    </div>
  );
}

export default App;
