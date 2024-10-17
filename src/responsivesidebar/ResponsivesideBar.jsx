import React from "react";
import "./responsivesider.css";
import { motion } from "framer-motion";
import { iconBox, iconslide, listslide, menuslide } from "./FramerLogic";
import { lasticon, ListData } from "./data";
import Curve from "./Curve";

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
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="last-box"
      >
        <div className="last-inside">
          {lasticon.map((v, i) => {
            return (
              <motion.div
                key={i}
                custom={i}
                variants={iconslide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {v.icon}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <Curve />
    </motion.div>
  );
};

export default ResponsivesideBar;
