import { motion } from 'motion/react'
import "./navbar.scss";
import SideBar from '../sidebar/SideBar';
function Navbar() {
  return (
    <div className="navbar">
      <SideBar/>
      <div className="wrapper">
        <motion.span initial={{opacity : 0 ,scale : 0.5}} animate={{opacity : 1,scale : 1}} transition={{duration : 0.5}} >Pranav phalke</motion.span>
        <div className="social">
                    <motion.a href="https://www.linkedin.com/in/pranav-phalke-112a162ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" whileHover={{scale : 1.2}}><img src="/linkedin.png" alt="" /></motion.a>
                    <motion.a    href="https://mail.google.com/mail/?view=cm&fs=1&to=pranavphalke9555@gmail.com"
                      target="_blank"
                      whileHover={{scale : 1.2}}><img src="/gmail.png" alt="" /></motion.a>
                    <motion.a href="#" whileHover={{scale : 1.2}}><img src="/facebook.png" alt="" /></motion.a>
                    <motion.a href="https://github.com/Pranav9555" whileHover={{scale : 1.2}}><img src="/github.png" alt="" /></motion.a>
        </div>
      </div>

    </div>
  )
}

export default Navbar;