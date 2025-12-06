import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        year: '2009-2015',
        title: 'School',
        description: 'I completed my foundational education at Dolly Memorial School, where I developed a strong academic base and nurtured a passion for learning.',
    },
    {
        year: '2015-2021',
        title: 'High-School',
        description: 'During my time at Panchbibi L. B. Pilot Government High School, I excelled in mathematics and science, paving the way for my interest in programming and technology.',
    },
    {
        year: '2022-2023',
        title: 'College',
        description: 'At Hakimpur Government College, I honed my critical thinking and problem-solving skills, which continue to guide my approach to complex challenges in software development.',
    },
    {
        year: '2024 – Present',
        title: 'Bachelor of Science in CSE',
        description: 'Currently pursuing my Bachelor\'s degree in Computer Science & Engineering at Bangladesh University of Business & Technology (BUBT).',
    },
];

const Education = () => {
    return (
        <section id="education" className="min-h-screen bg-bg py-24 px-[12%] flex flex-col items-center">
            <h2 className="text-5xl font-bold text-white mb-16 relative text-center">
                Education
                <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500"></span>
            </h2>

            <div className="w-full max-w-4xl border-l-2 border-white/20 ml-4 md:ml-0">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-8 pb-12 group"
                    >
                        <div className="absolute left-[-10px] top-0 w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:bg-main transition-colors duration-300"></div>
                        <div className="text-xl font-bold text-blue-500 mb-2">{item.year}</div>
                        <div className="bg-second-bg p-8 rounded-xl shadow-lg relative z-10 group-hover:bg-main group-hover:text-black group-hover:border-main border border-transparent transition-all duration-300 hover:translate-x-2">
                            <h3 className="text-2xl font-semibold text-main mb-4 group-hover:text-black">{item.title}</h3>
                            <p className="text-lg leading-relaxed text-white group-hover:text-black">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
