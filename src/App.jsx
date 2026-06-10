import React from 'react'
import Home from './Library/Home'
import { Routes, Route } from "react-router-dom";
import Students from "./Library/Students"
import AddStudent from "./Library/AddStudent";
import Dashboard from "./Library/Dashboard";
import Login from "./Library/Login";
import EditStudent from "./Library/EditStudent";
import StudentProfile from "./Library/StudentProfile";
import Fees from "./Library/Fees";
import Report from "./Library/Reports";
import Reports from './Library/Reports';
import Settings from './Library/Settings';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/edit-student/:id"
          element={<EditStudent />}
        />
        <Route
          path="/student/:id"
          element={<StudentProfile />}
        />
        <Route path="/reports" element={<Reports />} />
        <Route
          path="/fees"
          element={<Fees />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
      </Routes>
    </div>
  )
}

export default App
