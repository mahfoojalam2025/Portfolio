import React from "react";
import { SkillsInfo } from "../constants";

const Skills = () => {
  const allSkills = SkillsInfo.flatMap((category) => category.skills);

  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable and modern applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {allSkills.map((skill) => (
            <div
              key={skill.name}
              className="
                group relative flex flex-col items-center justify-center
                bg-gray-900 rounded-xl
                py-6 px-3
                border border-gray-800
                transition-all duration-300
                shadow-[6px_6px_12px_rgba(0,0,0,0.6),-4px_-4px_10px_rgba(255,255,255,0.03)]
                hover:shadow-[0_10px_30px_rgba(130,69,236,0.6)]
                hover:-translate-y-2
                hover:border-purple-500
              "
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_25px_rgba(130,69,236,0.8)]"></div>

              {/* Icon */}
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 transition duration-300 group-hover:scale-110"
              />

              {/* Name */}
              <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition">
                {skill.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;