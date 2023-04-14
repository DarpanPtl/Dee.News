// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsitem from "./components/NewsItem";

const App = () => {
  // const pageSize = 10;
  const apiKey = "a940d5dbdaec4b5bb806b4afbb1dc00e";

  const [progress, setProgress] = useState(0);

  // ----------------------------toggelemode--------------------

  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#145DA0";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                // pageSize={pageSize}
                country="in"
                category="general"
                mode={mode}
                toggleMode={toggleMode}
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                // pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            key="entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                // pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                // pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                // pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            key="science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                // pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                // pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/techonolgy"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="techonolgy"
                // pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
