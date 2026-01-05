import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { RiGithubFill, RiExternalLinkLine, RiArrowLeftLine } from 'react-icons/ri';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-bg flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-main text-black rounded-lg font-bold hover:bg-white transition-colors duration-300"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-bg py-24 px-[12%]">
            <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-main hover:text-white mb-8 transition-colors duration-300"
            >
                <RiArrowLeftLine size={24} />
                <span className="text-lg font-bold">Back to Projects</span>
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                {/* Project Header */}
                <div className="bg-second-bg rounded-2xl overflow-hidden shadow-lg mb-8">
                    <div className="h-96 bg-gray-800 relative overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-second-bg to-transparent" />
                        <div className="absolute top-6 right-6 bg-main text-black text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                            {project.category}
                        </div>
                    </div>
                    <div className="p-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-main text-black rounded-lg font-bold hover:bg-white transition-colors duration-300"
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
                                    <RiGithubFill /> Server Repository
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Technology Stack */}
                <div className="bg-second-bg rounded-2xl p-8 shadow-lg mb-8">
                    <h2 className="text-3xl font-bold text-main mb-6">Technology Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-bg border border-gray-700 rounded-full text-sm text-gray-300 hover:border-main hover:text-main transition-colors duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Brief Description */}
                <div className="bg-second-bg rounded-2xl p-8 shadow-lg mb-8">
                    <h2 className="text-3xl font-bold text-main mb-6">Project Overview</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                    <div className="mt-6">
                        <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <span className="text-main">▹</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Challenges Faced */}
                <div className="bg-second-bg rounded-2xl p-8 shadow-lg mb-8">
                    <h2 className="text-3xl font-bold text-main mb-6">Challenges Faced</h2>
                    <div className="space-y-4">
                        {project.challenges.map((challenge, i) => (
                            <div key={i} className="p-4 bg-bg rounded-xl border-l-4 border-main">
                                <p className="text-gray-300 leading-relaxed">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Improvements */}
                <div className="bg-second-bg rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-main mb-6">Future Improvements & Plans</h2>
                    <div className="space-y-4">
                        {project.improvements.map((improvement, i) => (
                            <div key={i} className="p-4 bg-bg rounded-xl border-l-4 border-cyan-400">
                                <p className="text-gray-300 leading-relaxed">{improvement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectDetail;

