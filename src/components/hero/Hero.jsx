import "./Hero.scss";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function Hero() {
  const textvariants = {
    initial : {
      x : -500,
      opacity : 0
    },
    animate : {
      x : 0,
      opacity : 1,
      transition : {
        type: " spring",
        duration : 1,
        staggerChildren : 0.3
      }
    },
    Scrollbutton : {
      y : 10,
      opacity : 0,
      transition : {
        duration : 2,
        repeat : Infinity,
      }
    }
  }
  let ref=useRef();
  let inView = useInView(ref);


  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textvariants} intital="intial" animate={inView ? "animate" : "initial"}  ref={ref} >
          <motion.h2 variants={textvariants}>Hello Everyone</motion.h2>
          <motion.h1 variants={textvariants} >I'm Pranav! (full stack developer)</motion.h1>
          <motion.div variants={textvariants} className="buttons">
            <a href="#Projects" ><motion.button variants={textvariants} whileHover={{scale : 1.1}} whileTap={{scale : 1.2}}>see latest project</motion.button></a>
            <a href="#Contact" ><motion.button variants={textvariants} whileHover={{scale : 1.1}} whileTap={{scale : 1.2}} >contact me</motion.button></a>
          </motion.div>

          <motion.img src="/scroll.png" alt="scroller-image" variants={textvariants} animate="Scrollbutton"/> 
         </motion.div>

      </div>

      <marquee className="slidingtext">mern stack developer</marquee>
      <div className="imgContainer">
        <img src="/profile4.png" alt="profile-image" />
      </div>
    </div>
  );


}

export default Hero;