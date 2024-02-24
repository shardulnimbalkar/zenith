// Inside App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExcelUploader from "./screens/JobProfileUpload";
import Login from "./screens/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/job-profile-upload" element={<ExcelUploader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h1>Welcome to Zenith AI Aggregator</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
