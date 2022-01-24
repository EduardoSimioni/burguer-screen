import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index'
import Requests from "./pages/Requests/index";

function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/requests" element={<Requests/>} />
            </Routes>
        </Router>

    )
}

export default MyRoutes