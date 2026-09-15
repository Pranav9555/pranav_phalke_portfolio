import {motion} from "motion/react";
import { useRef } from "react";
import "./About.scss"
import { useInView } from "motion/react";
function About() {
  const variants = {
    initial :  {
      opacity : 0,
      y : -100
    },
    animate : {
      opacity : 1,
      y:0,
      transition : {
        duration:1
      }
    }
  };
  const textvariants = {
    intial : {
      opacity : 0,
      y : 150
    },
    animate : {
            opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }

    }
  };
  
  let ref = useRef();
  let isInView = useInView(ref);
  return (
    <div className="about">
      <div className="left">
        <motion.h1 variants={textvariants} animate={isInView ? "animate" : "initial"} initial="initial" ref={ref}>About me ? </motion.h1>
        <h2>(Mern developer)</h2>
        <motion.div className="social" variants={variants} animate={isInView ? "animate" : "initial"} ref={ref} initial="initial">
          <a href="https://www.linkedin.com/in/pranav-phalke-112a162ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><motion.img src="/linkedin.png" alt="linkedin" whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}
            initial={{ opacity: 0,y:60 }}
            animate={{ opacity: 1 ,y:0}}
            transition={{ duration: 1 }}

          /></a>
          <a href="https://github.com/Pranav9555" ><motion.img whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }} initial={{ opacity: 0,y:60 }}
            animate={{ opacity: 1,y:0 }}
            transition={{ duration: 1 }}
            src="/github.png" alt="github" /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pranavphalke9555@gmail.com" ><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}
            initial={{ opacity: 0,y:60 }}
            animate={{ opacity: 1,y:0 }}
            transition={{ duration: 1 }}
            src="/gmail.png" alt="gmail" /></a>
        </motion.div>
      </div>
      <motion.div className="right">
        <motion.p variants={variants} initial="initial" animate={isInView ? "animate" : "initial"} ref={ref}>I’m Pranav Phalke, a Full Stack Developer with hands-on experience building responsive and interactive web applications using the MERN stack. I enjoy solving real-world problems and turning ideas into functional, user-friendly products.</motion.p>
      </motion.div>
    </div>
  )
}
export default About;