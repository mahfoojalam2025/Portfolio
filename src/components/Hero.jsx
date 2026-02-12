import React from "react";
import profile from "../assets/profile.jpg";
// import resumePDF from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const HeroSection = () => {

  const handleViewWork = () => {
  const section = document.getElementById("project");
  if (section) {
    const navHeight = 80; // adjust if needed
    const sectionTop = section.offsetTop - navHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
};

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Mahfooj_Alam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-gray-950 text-white px-6 overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">

        {/* LEFT CONTENT */}
        <div className="space-y-8 text-center md:text-left">

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Mahfooj Alam
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-400">
            <TypeAnimation
              sequence={[
                "iOS Developer",
                1500,
                "IoT Engineer",
                1500,
                "UI/UX Designer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-400 text-lg max-w-xl">
            I design and build intelligent digital systems — blending
            creativity, engineering, and innovation to create impactful
            experiences.
          </p>

          {/* Motivational Quote */}
          <blockquote className="italic text-gray-500 border-l-4 border-purple-500 pl-4">
            "Code is not just logic — it's imagination turned into reality."
          </blockquote>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="bg-gray-900 px-6 py-3 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-purple-400">5+</h3>
              <p className="text-sm text-gray-400">Projects Built</p>
            </div>
            <div className="bg-gray-900 px-6 py-3 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-purple-400">0 - 1</h3>
              <p className="text-sm text-gray-400">Years Learning</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="#project"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold shadow-lg hover:scale-105 transition"
            >
              View Projects →
            </a>

            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-xl border border-gray-700 hover:border-purple-500 hover:bg-purple-600/10 transition"
            >
              Download Resume
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4 justify-center md:justify-start">
            <a
              href="https://github.com/mahfoojalam2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="www.linkedin.com/in/mahfooj-alam2008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/mahfooj.decode/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-60 h-60 md:w-[28rem] md:h-[28rem]">

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl"></div>

            <img
              src={profile}
              alt="Mahfooj Alam"
              className="relative w-full h-full object-cover rounded-full border-4 border-purple-600 shadow-[0_0_40px_rgba(130,69,236,0.6)]"
            />
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
};

export default HeroSection;