import React from 'react';
import { motion } from 'framer-motion';
import { RiTrophyLine, RiLinkM } from 'react-icons/ri';

const Codeforces = () => {
    return (
        <section id="codeforces" className="min-h-screen bg-second-bg py-24 px-[12%] text-center">
            <h2 className="text-5xl font-bold text-white mb-16">
                Codeforces <span className="text-main">Achievements</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-bg p-10 rounded-2xl shadow-lg hover:-translate-y-4 hover:bg-main hover:text-bg transition-all duration-300 group cursor-pointer"
                >
                    <RiTrophyLine className="text-6xl text-main mb-6 mx-auto group-hover:text-bg group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-500" />
                    <h3 className="text-3xl font-semibold text-main mb-4 group-hover:text-bg transition-colors duration-300">Codeforces Rating: 1000+</h3>
                    <p className="text-lg text-white/80 leading-relaxed group-hover:text-bg transition-colors duration-300">
                        I’ve crossed the 1000 rating milestone on Codeforces, primarily solving algorithmic challenges using C and C++. This accomplishment reflects my problem-solving skills and my dedication to competitive programming.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-bg p-10 rounded-2xl shadow-lg hover:-translate-y-4 hover:bg-main hover:text-bg transition-all duration-300 group cursor-pointer"
                >
                    <RiLinkM className="text-6xl text-main mb-6 mx-auto group-hover:text-bg group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-500" />
                    <h3 className="text-3xl font-semibold text-main mb-4 group-hover:text-bg transition-colors duration-300">Check Out My Profile</h3>
                    <p className="text-lg text-white/80 leading-relaxed group-hover:text-bg transition-colors duration-300">
                        Visit my <a href="https://codeforces.com/profile/M_FOR_MAHIR" target="_blank" rel="noreferrer" className="text-main underline group-hover:text-bg">Codeforces profile</a> to see my achievements, solve problems, and follow my journey in competitive programming!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Codeforces;
