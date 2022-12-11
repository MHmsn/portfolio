import "./App.css";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import Header from "./components/Header";
import ContactViaForm from "./components/ContactViaForm";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import { useState } from "react";

function App() {
  const [project, setProject] = useState(null);
  return (
    <div className="App text-white bg-black bg-opacity-40 max-w-[1920px] mx-auto">
      <ParticlesBackground />
      <Navbar />
        <Fade>
          <Header/>
        </Fade>
        <Zoom>
        <Skillset/>
        </Zoom>
        <Zoom direction="right">
        <Projects setProject={setProject}/>
        </Zoom>
        <Zoom>
        <ContactViaForm/>
        </Zoom>
        <Slide direction="up">
        <Footer/>
        </Slide>
      {/* btn modal work later<div>
      <button className=" btn btn-primary rounded-full fixed bottom-4 right-4 z-20">test</button>
      </div> */}
      <ProjectModal project={project}/>
        <Toaster/>
    </div>
  );
}

export default App;
