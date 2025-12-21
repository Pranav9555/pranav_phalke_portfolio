import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ThankYou from "./components/thanku/ThankYou";
function App(){
  return ( 
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills/>
      </section>
        <Projects/>
      <section id="Contact">
        <Contact/>
      </section>
      <section>
        <ThankYou/>
      </section>
  
    </div>
  )
}

export default App;