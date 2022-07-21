import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/App.scss'
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
