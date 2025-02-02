import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeamIntro from "./components/TeamIntro";
import SOPCards from "./components/SOPCards";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TeamIntro />} />
          <Route path="/sop" element={<SOPCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





