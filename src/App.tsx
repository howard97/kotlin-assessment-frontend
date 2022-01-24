import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import React, { useEffect, useState } from "react";
import Appointment from "./components/Appointment";

function App() {
  const [username, setUserName] = useState("");
  const [patientId, setPatientId] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/api/v1/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setUserName(content.email);
      setPatientId(content.id);
    })();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Nav username={username} setUsername={setUserName} />
        <main className="form-signin">
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/appointment"
              element={<Appointment patientId={patientId} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
