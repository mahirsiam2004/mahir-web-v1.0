import React from 'react';
import { motion } from 'framer-motion';
import { RiCodeSSlashLine, RiLightbulbFlashLine, RiHeartLine, RiGamepadLine } from 'react-icons/ri';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-bg py-24 px-[12%]">
            <h2 className="text-5xl font-bold text-center text-white mb-16">
                About <span className="text-main">Me</span>
            </h2>

            <div className="max-w-5xl mx-auto">
                {/* Main Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-second-bg rounded-2xl p-8 md:p-12 mb-12 shadow-lg"
                >
                    <h3 className="text-3xl font-bold text-main mb-6">Who I Am</h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        I'm <span className="text-main font-semibold">Mahir Shiyam Muhin</span>, a passionate MERN Stack Developer 
                        currently pursuing my Bachelor's degree in Computer Science & Engineering at Bangladesh University of Business & Technology (BUBT). 
                        My journey in programming began with a curiosity about how websites and applications work, and it has evolved into a deep passion 
                        for creating innovative digital solutions.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I believe in writing clean, efficient code and building applications that not only look great but also solve real-world problems. 
                        My approach combines technical expertise with creative problem-solving, always striving to deliver the best user experience possible.
                    </p>
                </motion.div>

                {/* Programming Journey */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-second-bg rounded-2xl p-8 md:p-12 mb-12 shadow-lg"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <RiCodeSSlashLine className="text-main text-4xl" />
                        <h3 className="text-3xl font-bold text-white">My Programming Journey</h3>
                    </div>
                    <div className="space-y-4 text-gray-300">
                        <p className="text-lg leading-relaxed">
                            My programming journey started during my college years when I first encountered computer science. 
                            What began as a simple curiosity quickly transformed into an obsession. I started with the basics of C and C++, 
                            solving algorithmic problems and participating in competitive programming contests.
                        </p>
                        <p className="text-lg leading-relaxed">
                            As I progressed, I discovered web development and fell in love with the MERN stack. The ability to build 
                            full-stack applications from scratch, create beautiful user interfaces, and solve complex backend challenges 
                            became my passion. I've solved <span className="text-main font-semibold">800+ problems</span> across various 
                            online judges, which has sharpened my problem-solving skills and algorithmic thinking.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Today, I'm continuously learning and building projects that challenge me. Each project teaches me something new, 
                            whether it's implementing role-based authentication, integrating payment systems, or optimizing database queries. 
                            I'm always excited to take on new challenges and expand my skill set.
                        </p>
                    </div>
                </motion.div>

                {/* Work Preferences */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-second-bg rounded-2xl p-8 md:p-12 mb-12 shadow-lg"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <RiLightbulbFlashLine className="text-main text-4xl" />
                        <h3 className="text-3xl font-bold text-white">What I Enjoy Working On</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-bg rounded-xl border border-gray-700 hover:border-main transition-colors duration-300">
                            <h4 className="text-xl font-bold text-main mb-3">Full-Stack Development</h4>
                            <p className="text-gray-300">
                                I love building complete applications from frontend to backend, ensuring seamless integration 
                                and optimal performance across the entire stack.
                            </p>
                        </div>
                        <div className="p-6 bg-bg rounded-xl border border-gray-700 hover:border-main transition-colors duration-300">
                            <h4 className="text-xl font-bold text-main mb-3">Problem Solving</h4>
                            <p className="text-gray-300">
                                Solving complex algorithmic challenges and debugging intricate issues gives me immense satisfaction. 
                                I enjoy the mental exercise of breaking down problems into manageable pieces.
                            </p>
                        </div>
                        <div className="p-6 bg-bg rounded-xl border border-gray-700 hover:border-main transition-colors duration-300">
                            <h4 className="text-xl font-bold text-main mb-3">UI/UX Design</h4>
                            <p className="text-gray-300">
                                Creating beautiful, intuitive user interfaces that provide excellent user experiences is something 
                                I'm passionate about. I believe good design is as important as good code.
                            </p>
                        </div>
                        <div className="p-6 bg-bg rounded-xl border border-gray-700 hover:border-main transition-colors duration-300">
                            <h4 className="text-xl font-bold text-main mb-3">Learning New Technologies</h4>
                            <p className="text-gray-300">
                                The tech world is constantly evolving, and I thrive on learning new frameworks, tools, and 
                                methodologies to stay current and improve my craft.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Hobbies & Interests */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-second-bg rounded-2xl p-8 md:p-12 shadow-lg"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <RiHeartLine className="text-main text-4xl" />
                        <h3 className="text-3xl font-bold text-white">Hobbies & Interests</h3>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <RiGamepadLine className="text-main text-2xl mt-1" />
                            <div>
                                <h4 className="text-xl font-bold text-main mb-2">Competitive Programming</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    When I'm not building web applications, you'll often find me solving problems on Codeforces, 
                                    LeetCode, and other competitive programming platforms. It's a great way to keep my problem-solving 
                                    skills sharp and learn new algorithms.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <RiCodeSSlashLine className="text-main text-2xl mt-1" />
                            <div>
                                <h4 className="text-xl font-bold text-main mb-2">Open Source Contribution</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    I enjoy contributing to open-source projects and sharing my knowledge with the developer community. 
                                    It's rewarding to help others learn and grow while also improving my own skills.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <RiLightbulbFlashLine className="text-main text-2xl mt-1" />
                            <div>
                                <h4 className="text-xl font-bold text-main mb-2">Tech Blogging & Learning</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    I love reading tech blogs, watching tutorials, and staying updated with the latest trends in web development. 
                                    Continuous learning is a core part of who I am, and I'm always exploring new technologies and best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

