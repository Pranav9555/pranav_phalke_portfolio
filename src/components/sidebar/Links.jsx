import {motion} from "motion/react";
function Links() {

  const variants = {
    open : {
      transition : {
        staggerChildren : 0.1,
      }
    },
    closed : {
      transition : {
        staggerChildren : 0.05,
        staggerChildren: -1
      }
    }
  }
  const itemVariant = {
    open : {
      y : 0,
      opacity : 1
    },
    closed : {
      opacity : 0,
      y : 50
    }
  }
  const items = ["Homepage","About","Skills","Projects","Contact"];
 return (
   <motion.div className="links" variants={variants} >

  {items.map((item) => (
    <motion.a href={`#${item}`} key={item}
    variants={itemVariant}
    whileHover={{scale : 1.1}}
    whileTap={{scale : 0.95}}
    >{item}</motion.a>
  ))}

  </motion.div>

 )
}
export default Links;