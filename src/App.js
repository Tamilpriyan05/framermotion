import { useState } from "react";
import "./App.css";

import ResponsivesideBar from "./responsivesidebar/ResponsivesideBar";
import { AnimatePresence } from "framer-motion";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [siderBarStatus, setSiderBarStatus] = useState(false);
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={() => setSiderBarStatus(!siderBarStatus)}
          className="menu-button"
        >
          {siderBarStatus ? (
            <CloseIcon sx={{ color: "white", fontSize: "40px" }} />
          ) : (
            <ShortTextIcon sx={{ color: "black", fontSize: "40px" }} />
          )}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {siderBarStatus && <ResponsivesideBar />}
      </AnimatePresence>
    </div>
  );
}

export default App;
