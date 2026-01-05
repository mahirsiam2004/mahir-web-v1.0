import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  RiGithubFill,
  RiExternalLinkLine,
  RiInformationLine,
} from "react-icons/ri";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-screen bg-bg py-24 px-[12%]">
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        My <span className="text-main">Projects</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-second-bg rounded-2xl overflow-hidden shadow-lg group hover:shadow-[0_0_20px_rgba(0,188,212,0.3)] transition-all duration-300"
          >
            {/* Project Image (Placeholder for now) */}
            <div className="h-64 bg-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-second-bg to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-20 bg-main text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.category}
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-main transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-bg border border-gray-700 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="flex items-center gap-2 px-6 py-3 bg-main text-black rounded-lg font-bold hover:bg-white transition-colors duration-300"
                >
                  <RiInformationLine /> View Details
                </button>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-main text-main rounded-lg font-bold hover:bg-main hover:text-black transition-colors duration-300"
                >
                  <RiExternalLinkLine /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg font-bold hover:border-main hover:text-main transition-colors duration-300"
                >
                  <RiGithubFill /> GitHub
                </a>
                {project.serverLink && (
                  <a
                    href={project.serverLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-white rounded-lg font-bold hover:border-main hover:text-main transition-colors duration-300"
                  >
                    <RiGithubFill /> Server
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
