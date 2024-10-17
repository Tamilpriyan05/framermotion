import React from "react";
import "./responsivesider.css";
import { motion } from "framer-motion";
import { listslide, menuslide } from "./FramerLogic";
import { ListData } from "./data";

const ResponsivesideBar = () => {
  return (
    <motion.div
      variants={menuslide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="sidebar-mainbox"
    >
      <div className="inside-box">
        <div className="list-box">
          {ListData.map((v, i) => {
            return (
              <motion.div
                custom={i}
                key={v.id}
                variants={listslide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="list-items"
              >
                <p>{v.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ResponsivesideBar;
