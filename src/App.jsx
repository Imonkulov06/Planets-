import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Mercury from "./Components/Mercury/Mercury";
import Venus from "./Components/Venus/Venus";
import Earth from "./Components/Earth/Earth";
import Mars from "./Components/Mars/Mars";
import Jupiter from './Components/Jupiter/Jupiter'
import Saturn from "./Components/Saturn/Saturn";
import Uranus from "./Components/Uranus/Uranus";
import Neptune from "./Components/Neptune/Neptune";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="mercury" element={<Mercury />} />
                    <Route path="venus" element={<Venus />} />
                    <Route path="earth" element={<Earth />} />
                    <Route path="mars" element={<Mars />} />
                    <Route path="jupiter" element={<Jupiter />} />
                    <Route path="saturn" element={<Saturn/>} />
                    <Route path="uranus" element={<Uranus />} />
                    <Route path="neptune" element={<Neptune />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
