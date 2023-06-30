import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Notifications from "./Notifications";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}
