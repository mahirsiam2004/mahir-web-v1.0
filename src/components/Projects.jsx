import React from 'react';
import { motion } from 'framer-motion';
import { RiGithubFill, RiExternalLinkLine } from 'react-icons/ri';

const projectsData = [
    {
        title: 'GreenNest – Indoor Plant Store',
        description: 'A responsive plant shop with cart, checkout, and expert consultation booking.',
        tech: ['React', 'Tailwind', 'DaisyUI', 'Framer Motion', 'Axios', 'GSAP'],
        features: ['Plant catalog', 'Cart system', 'Checkout flow', 'Consultation booking', 'Smooth animations'],
        liveLink: 'https://greennest17.pages.dev/',
        githubLink: 'https://github.com/mahirsiam2004/GreenNext',
        image: 'https://placehold.co/600x400/0f172a/06b6d4?text=GreenNest', // Placeholder, user can replace later
        category: 'Frontend'
    },
    {
        title: 'Altrion – Online Learning Platform',
        description: 'A complete learning platform with course browsing, enrollments, authentication, and REST APIs.',
        tech: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Framer Motion', 'GSAP'],
        features: ['Course CRUD', 'Search & Filter', 'Featured courses', 'Student enrollment', 'Authentication', 'Dynamic routing'],
        liveLink: 'https://altrion-client.vercel.app/',
        githubLink: 'https://github.com/mahirsiam2004/Altrion-client',
        serverLink: 'https://github.com/mahirsiam2004/Altrion-server',
        image: 'https://placehold.co/600x400/0f172a/06b6d4?text=Altrion', // Placeholder
        category: 'Full-Stack'
    }
];

const Projects = () => {
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
                                    <span key={i} className="px-3 py-1 bg-bg border border-gray-700 rounded-full text-xs text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
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
