import React from 'react';
import profile from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf'; 
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';

// import { DottedGlowBackground } from "./ui/dotted-glow-background";

// Inline SVG for the 'ArrowRight' icon (simulating lucide-react or similar)
const ArrowRightIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const handleDownload = () => {
  // Create a link element
  const link = document.createElement('a');
  // link.href = resumePDF;
  // link.download = '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Update the Resume button with loading state
const ResumeButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await handleDownload();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="px-5 py-2.5 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-700 transition duration-100 flex items-center gap-2"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <span className="animate-spin">⟳</span> Loading...
        </>
      ) : (
        <>
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Resume
        </>
      )}
    </button>
  );
};

const HeroSection = () => {
  const handleViewWork = () => {
    const projectsSection = document.getElementById('work');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const profileImageUrl = profile;

  return (
    <section id="about" className="relative flex items-center justify-center min-h-screen w-full bg-gray-950 text-white p-4 overflow-hidden">
      {/* Background Dots & Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]">
        <div className="absolute inset-0 bg-repeat bg-[size:20px_20px] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_0)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24">
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profile}
              alt="Mahfooj Alam"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
        {/* Left Side Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Mahfooj Alam.
          </h1>
          
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-[#8245ec] leading-tight">
            <span className="text-white">I'm </span>
            <TypeAnimation
              sequence={[
                'Junior iOS Developer.',
                1000,
                'IoT Engineer.',
                1000,
                'UI/UX Designer.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>

          {/* Subheading/Role */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400 mb-10 max-w-xl">
            iOS Developer, IoT Enthusiast, and UI/UX Architect.
          </p>

          {/* Call-to-Action (CTA) */}
          <div className="flex space-x-6 mt-8">
            <button
              className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-blue-500/50"
              onClick={handleViewWork}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-gray-900 rounded-md text-white">
                View My Work
                <ArrowRightIcon className="inline ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <ResumeButton />
          </div>
        </div>

         
      </div>
    </section>
  );
};


// Main exported component (renamed from App to Hero)
const Hero = () => {
  return (
    <div className="font-sans antialiased">
      <HeroSection />
    
           {/* <DottedGlowBackground /> */}
    </div>
  );
};

export default Hero;
