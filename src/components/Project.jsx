import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";


const projects = [
  {
  image: project1,
  title: "Human Following Robot",
  description:
    "An autonomous robot designed to detect and follow a human target using ultrasonic and infrared sensors. The system processes distance data in real-time to maintain safe tracking movement.",
  techStack: ["Arduino", "Ultrasonic Sensor", "IR Sensor", "Motor Driver"],
  features: [
    "Real-time human distance tracking",
    "Smooth directional movement control",
    "Collision prevention mechanism",
  ],
  liveLink: "#",
  githubLink: "https://github.com/mahfoojalam2025",
},
{
  image: project2,
  title: "Smart Radar System",
  description:
    "A 180° scanning radar system that visualizes object distance using ultrasonic sensors and a servo motor. It maps surroundings and displays live obstacle data on a monitoring interface.",
  techStack: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Processing IDE"],
  features: [
    "180-degree object scanning",
    "Real-time distance visualization",
    "Interactive radar interface display",
  ],
  liveLink: "#",
  githubLink: "https://github.com/mahfoojalam2025",
},
{
  image: project3,
  title: "Spider Robot",
  description:
    "A multi-legged robotic system inspired by spider locomotion. It uses servo motors to simulate natural walking patterns and demonstrates advanced movement coordination.",
  techStack: ["Arduino", "Servo Motors", "PCA9685 Driver", "Embedded C"],
  features: [
    "Multi-leg synchronized movement",
    "Stable walking algorithm",
    "Lightweight robotic frame design",
  ],
  liveLink: "#",
  githubLink: "https://github.com/mahfoojalam2025",
},
{
  image: project4,
  title: "Quadruped Robot",
  description:
    "A four-legged robotic platform designed for stable terrain navigation. The robot maintains balance and performs walking sequences using servo-based joint control.",
  techStack: ["Arduino", "Servo Motors", "MPU6050 Sensor", "Motor Driver"],
  features: [
    "Four-leg walking mechanism",
    "Balance stabilization system",
    "Terrain adaptive movement",
  ],
  liveLink: "#",
  githubLink: "https://github.com/mahfoojalam2025",
},
{
  image: project5,
  title: "Obstacle Avoidance Robot",
  description:
    "An autonomous mobile robot capable of detecting and avoiding obstacles using ultrasonic sensors. It continuously scans its path and adjusts movement accordingly.",
  techStack: ["Arduino", "Ultrasonic Sensor", "L298N Motor Driver", "DC Motors"],
  features: [
    "Autonomous navigation",
    "Dynamic obstacle detection",
    "Smart path redirection system",
  ],
  liveLink: "#",
  githubLink: "https://github.com/mahfoojalam2025",
}

  // 👉 Add more projects here easily
];

const Project = () => {
  return (
    <section id="project" className="min-h-screen w-full bg-gradient-to-b from-black via-gray-950 to-black text-white py-24 px-6 md:px-12">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in development, design, and innovation.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;