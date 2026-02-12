import React from "react";
import { FaExternalLinkAlt, FaGithub, FaRocket } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  features,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition duration-500 hover:-translate-y-2">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Extra Features */}
        <div className="pt-2">
          <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
            <FaRocket className="text-purple-400" />
            Key Features
          </h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
          >
            Live Demo
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-white/20 py-2 rounded-lg text-sm hover:bg-white/10 transition"
          >
            <FaGithub className="inline mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;