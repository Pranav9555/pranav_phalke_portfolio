import {motion}  from "motion/react";
import { useState } from "react";
import Toggle from "./Toggle";
import Links from "./Links";
import "./SideBar.scss";
function SideBar() {
  const variants = {
    open : {
      clipPath : "circle(1200px at 0px 50px)",
      transition : {
        type:"spring",
        stifness : 30
      },
    },
    closed : {
      clipPath : "circle(30px at 50px 50px)",
      transition : {
        type:"spring",
        stifness : 400,
        damping : 20,
        delay : 0.5
      },
    },
  };
const [open,setOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  )
}

export default SideBar;