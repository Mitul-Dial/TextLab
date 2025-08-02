import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <div className="app">
      <Router>
        <Navbar title="TextLab" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <main className="main-container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Advanced Text Utility"
                  subtitle="Transform, analyze, and manipulate your text with powerful tools"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
