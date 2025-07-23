import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextLab" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={ */}
                <TextForm
                  heading="Enter your text to analyze"
                  showAlert={showAlert}
                />
              {/* }
            />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
