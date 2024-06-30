import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./input.css";
import MainLayout from "./components/MainLayout";
import Home from "../src/components/page/Home";
import About from "../src/components/page/About";
import Services from "../src/components/page/Services";
import Dentist from "../src/components/page/Dentist";
import Gallery from "../src/components/page/Gallery";
import Contact from "../src/components/page/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/About"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Services"
            element={
              <MainLayout>
                <Services />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Dentist"
            element={
              <MainLayout>
                <Dentist />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Gallery"
            element={
              <MainLayout>
                <Gallery />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
