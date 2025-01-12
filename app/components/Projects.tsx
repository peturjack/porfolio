import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
const Projects = () => {
  const skills = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ];
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white  rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <skill.icon className="text-4xl mb-2 text-orange-500" />
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
