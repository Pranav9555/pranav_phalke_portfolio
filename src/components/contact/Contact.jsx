import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.scss";
import {motion} from "motion/react";
const variants = {
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1
    }
  }
}
function Contact() {
  let ref= useRef();
  let formRef= useRef();
  const [error,setError] = useState(false);
  const [success,setsuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_si2vhui', 'template_j7d1zrg', formRef.current, {
        publicKey: 'EF2x3chK2Ioq_7Utj',
      })
      .then(
        (result) => {
          setsuccess(true)
        },
        (error) => {
          setError(true)
        },
      );
  };


  return ( 
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>pranavphalke97975@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 9156330583</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Enter your name" required name="name"/>
          <input type="email" placeholder="Enter your email" required name="email"/>
          <textarea rows={8} placeholder="message" name="message"></textarea>
          <button>submit</button>
          {error && "error"}
          {success && "success"}
        </form>

      </div>
    </motion.div>
   );
}

export default Contact;