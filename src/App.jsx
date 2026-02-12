import React from "react"
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BlurBlob from "./BlurBlob";
import Skills from "./components/Skills";
import { ScrollProgress } from "./components/ui/scroll-progress";
import Project from "./components/Project";
import Contect from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/ui/Reveal";

function App() {
  return (
    <>
      <div>
        <BackgroundRippleEffect />
        <Navbar />
        <ScrollProgress />

        <Reveal>
        <Hero />
        </Reveal>

        <Reveal>  
        <BlurBlob position={{ top: '50%', left: '70%' }} size={{ width: '30%', height: '40%' }} />
        <Skills />
        </Reveal>

        <Reveal>
        <ScrollProgress />
        </Reveal>

        <Reveal>
        <Project />
        </Reveal>

        <Reveal>
        <Contect />
        </Reveal>
        
        <Footer />
      </div>
    </>
  )
}

export default App