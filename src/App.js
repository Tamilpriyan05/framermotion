import { useState } from "react";
import "./App.css";

import ResponsivesideBar from "./responsivesidebar/ResponsivesideBar";
import { AnimatePresence } from "framer-motion";

function App() {
  const [siderBarStatus, setSiderBarStatus] = useState(false);
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={() => setSiderBarStatus(!siderBarStatus)}
          className="menu-button"
        >
          {siderBarStatus ? "X" : "="}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {siderBarStatus && <ResponsivesideBar />}
      </AnimatePresence>
    </div>
  );
}

export default App;
