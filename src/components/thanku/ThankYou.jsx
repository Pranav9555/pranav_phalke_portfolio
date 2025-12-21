import {motion, useInView} from "motion/react";
import "./ThankYou.scss";
import { useRef } from "react";
function ThankYou() {
  let ref = useRef();
  let isInView = useInView(ref);

  const textVariants = {
    initial : {
      opacity : 0,
      y : 200
    },
    animate : {
      opacity:1,
      y:0,
      transition : {
        duration : 0.8,
      }
    }
  }


  return ( 

    <div className="thank-you-container">
      <motion.h1 variants={textVariants} animate={isInView ? "animate" : "initial"} initial="initial" ref={ref} >Thank You for visiting !</motion.h1>
      </div>
   );
}

export default ThankYou;