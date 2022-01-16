import React from "react";
import Home from "./components/home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Services from "./components/servicescom/Services";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}
