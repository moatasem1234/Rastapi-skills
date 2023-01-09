import React from "react";
import { Route, Routes,  } from "react-router-dom";
import Home from "./components/Home";
import SkillCreate from "./components/skills/SkillCreate";
import SkillEdit from "./components/skills/SkillEdit";
import SkillIndex from "./components/skills/SkillIndex";
import { SkillProvider } from "./context/SkillContext";
import Nav from "./components/Nav";
import Login from "./components/login and register/Login";
import Register from "./components/login and register/Register";

function App() {
  return (
    <SkillProvider>
    <div className="bg-slate-200">
      <div className="max-w-7xl mx-auto min-h-screen">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<SkillIndex />} />
          <Route path="/Skills/create" element={<SkillCreate />} />
          <Route path="/Skills/:id/edit" element={<SkillEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
  
        </Routes>
      </div>
    </div>
    </SkillProvider>
  );
}

export default App;
