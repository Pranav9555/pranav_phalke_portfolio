import "./Hero.scss";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function Hero() {
  const textVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const scrollIndicatorVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, 10, 0],
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          ref={ref}
        >
          <motion.span variants={textVariants} className="badge">
            👋 Available for freelance work
          </motion.span>

          <motion.h2 variants={textVariants}>Hello, I'm</motion.h2>

          <motion.h1 variants={textVariants}>
            Pranav <span className="highlight">— Full Stack Developer</span>
          </motion.h1>

          <motion.p variants={textVariants} className="subtitle">
            I build fast, reliable web applications end-to-end — from
            database and API design to polished, animated interfaces.
          </motion.p>

          <motion.div variants={textVariants} className="buttons">
            <a href="#Projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="primary"
              >
                See latest projects
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="secondary"
              >
                Contact me
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="slidingtext" aria-hidden="true">
        <span>MERN STACK DEVELOPER&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <span>MERN STACK DEVELOPER&nbsp;&nbsp;•&nbsp;&nbsp;</span>
      </div>

      <div className="imgContainer">
        <img src="/profile4.png" alt="Pranav profile" />
      </div>

      <motion.div
        className="scrollIndicator"
        variants={scrollIndicatorVariants}
        initial="initial"
        animate="animate"
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;