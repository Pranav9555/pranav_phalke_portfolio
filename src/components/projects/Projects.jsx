import { motion, useScroll, useSpring } from "motion/react";
import "./Project.scss"
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "Text to image generator",
    img: "/project.png",
    tech:"Tech : React.js, Express.js, MongoDB, ClipDrop API, JWT",
    desc: "Built a full-stack web application that generates Al-based images from text prompts using the ClipDrop API.Developed image generation, download functionality, and persistent user data management with MongoDB.",
    link : "https://github.com/Pranav9555/text-to-image-generator"
  },
  {
    id: 2,
    title: "Resume Builder",
    img: "/Resume.png",
    tech:"Tech : html, css, React.js, Express.js, MongoDB",
    desc: "•Developed an interactive UI full-stack resume builder application enabling users to create and customize professional resumes.Provided features for creating, customizing, editing, and downloading resumes in multiple formats.",
    link : "https://github.com/Pranav9555/Resume-builder"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    img: "/portfolio.png",
    tech: "Tech: html, css, React.js, Sass, Framer Motion",
    desc: "Designed and developed a responsive animated portfolio website to showcase projects and technical skills, implementing smooth, modern animations using Framer Motion.Built a scalable, responsive layout with Sass for maintainable CSS architecture and integrated a functional contact form with an email notification system for direct user communication.",
    link : "https://github.com/Pranav9555/personal-portfolio",
  },
];

const Single = ({ item }) => {
 
  return <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" >
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" >
          <h2>{item.title}</h2>
          <h3>{item.tech}</h3>
          <p>{item.desc}</p>
          <a href={item.link}><button>GITHUB</button></a>
        </motion.div>
      </div>
    </div>
  </section>
}

function Projects() {

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  return (
    <div className="portfolio" ref={ref} id="Projects">
      <div className="progress">
        <h1>PROJECTS</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {
        items.map((item) => (
          <Single item={item} key={item.id} />
        ))
      }
    </div>
  );
}

export default Projects;
