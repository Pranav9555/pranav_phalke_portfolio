import { motion,useInView} from "motion/react";
import "./Skills.scss";  
import { useRef } from "react";
function Skills() {
  const textVariants = {
    initial : {
      opacity : 0,
      y:-100,
    },
    animate : {
      y:0,
      opacity : 1,
      transition : {
        duration : 0.5,
        staggerChildren : 0.2,
      }
    }
  };
  let ref = useRef();
  let isInView = useInView(ref);
  return ( 
    <div className="container">
      <h1>Skills</h1>
      <motion.div className="skill" variants={textVariants} initial="initial" animate={isInView ? "animate" : "initial" } ref={ref}>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>HTML</span>
          <img src="/html.png" alt="html" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>CSS</span>
          <img src="/css-3.png" alt="css" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>Javascript</span>
          <img src="/js.png" alt="js" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>Bootstrap</span>
          <img src="/bootstrap.png" alt="js" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>React</span>
          <img src="/react.png" alt="js" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>NodeJs</span>
          <img src="/nodejs.png" alt="js" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>expressjs</span>
          <img src="/expressjs.png" alt="js" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>MongoDB</span>
          <img src="/mongodb.png" alt="mongodb" />
        </motion.div>
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}}>
          <span>Git</span>
          <img src="/git.png" alt="js" />
        </motion.div>
      </motion.div>
    </div>
   );
}

export default Skills;