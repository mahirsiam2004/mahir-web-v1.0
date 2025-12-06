import React from 'react';
import { motion } from 'framer-motion';
import {
    RiReactjsLine, RiHtml5Line, RiCss3Line, RiJavascriptLine,
    RiNodejsLine, RiCodeLine, RiDatabase2Line, RiServerLine, RiLayoutMasonryLine
} from 'react-icons/ri';
import {
    SiNextdotjs, SiTailwindcss, SiBootstrap, SiFramer, SiGreensock,
    SiExpress, SiMongodb, SiFirebase, SiCplusplus, SiC, SiTypescript
} from 'react-icons/si';

const allSkills = [
    { name: 'JavaScript', icon: RiJavascriptLine, color: 'text-yellow-400', category: 'Languages' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', category: 'Languages' },
    { name: 'C', icon: SiC, color: 'text-blue-300', category: 'Languages' },
    { name: 'React', icon: RiReactjsLine, color: 'text-cyan-400', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', category: 'Frontend' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-300', category: 'Frontend' },
    { name: 'Framer', icon: SiFramer, color: 'text-pink-500', category: 'Frontend' },
    { name: 'GSAP', icon: SiGreensock, color: 'text-green-500', category: 'Frontend' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', category: 'Frontend' },
    { name: 'Node.js', icon: RiNodejsLine, color: 'text-green-500', category: 'Backend' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-400', category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', category: 'Database' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', category: 'Database' },
    { name: 'JWT', icon: RiCodeLine, color: 'text-white', category: 'Backend' },
];

const SkillIcon = ({ Icon, color, name }) => (
    <div className="group relative flex items-center justify-center">
        <div className={`p-3 md:p-4 rounded-full bg-gray-900/80 border border-gray-700 ${color} shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_25px_var(--color-main)] group-hover:scale-110 transition-all duration-300 backdrop-blur-sm`}>
            <Icon className="text-xl md:text-2xl" />
        </div>
        {/* Tooltip */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-main whitespace-nowrap">
            {name}
        </div>
    </div>
);

const Orbit = ({ radius, duration, reverse, children }) => (
    <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-gray-800/30 flex justify-center items-center"
        style={{ width: radius * 2, height: radius * 2 }}
    >
        {children}
    </motion.div>
);

const OrbitItem = ({ angle, radius, reverse, duration, children }) => (
    <div
        className="absolute top-1/2 left-1/2"
        style={{
            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
        }}
    >
        <motion.div
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
            {children}
        </motion.div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen bg-bg py-24 px-[5%] overflow-hidden flex flex-col items-center justify-center relative">
            <h2 className="text-5xl font-bold text-center text-white mb-16 relative z-20">
                Tech <span className="text-main">Universe</span>
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12 lg:gap-0">

                {/* --- Left Side: Orbit Animation --- */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[500px] lg:h-[600px]">
                    {/* Central Core */}
                    <div className="absolute z-10 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-main to-blue-600 blur-md opacity-20 animate-pulse" />
                    <div className="absolute z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-900 border-2 border-main flex items-center justify-center shadow-[0_0_50px_var(--color-main)]">
                        <span className="text-main font-black text-lg lg:text-xl tracking-widest">MERN</span>
                    </div>

                    {/* Inner Orbit: Languages & Core */}
                    <Orbit radius={100} duration={20}>
                        <OrbitItem angle={0} radius={100} duration={20}><SkillIcon Icon={RiJavascriptLine} color="text-yellow-400" name="JavaScript" /></OrbitItem>
                        <OrbitItem angle={120} radius={100} duration={20}><SkillIcon Icon={SiCplusplus} color="text-blue-500" name="C++" /></OrbitItem>
                        <OrbitItem angle={240} radius={100} duration={20}><SkillIcon Icon={SiC} color="text-blue-300" name="C" /></OrbitItem>
                    </Orbit>

                    {/* Middle Orbit: Frontend */}
                    <Orbit radius={170} duration={30} reverse>
                        <OrbitItem angle={0} radius={170} duration={30} reverse><SkillIcon Icon={RiReactjsLine} color="text-cyan-400" name="React" /></OrbitItem>
                        <OrbitItem angle={60} radius={170} duration={30} reverse><SkillIcon Icon={SiNextdotjs} color="text-white" name="Next.js" /></OrbitItem>
                        <OrbitItem angle={120} radius={170} duration={30} reverse><SkillIcon Icon={SiTailwindcss} color="text-cyan-300" name="Tailwind" /></OrbitItem>
                        <OrbitItem angle={180} radius={170} duration={30} reverse><SkillIcon Icon={SiFramer} color="text-pink-500" name="Framer" /></OrbitItem>
                        <OrbitItem angle={240} radius={170} duration={30} reverse><SkillIcon Icon={SiGreensock} color="text-green-500" name="GSAP" /></OrbitItem>
                        <OrbitItem angle={300} radius={170} duration={30} reverse><SkillIcon Icon={SiBootstrap} color="text-purple-500" name="Bootstrap" /></OrbitItem>
                    </Orbit>

                    {/* Outer Orbit: Backend & Database */}
                    <Orbit radius={240} duration={40}>
                        <OrbitItem angle={0} radius={240} duration={40}><SkillIcon Icon={RiNodejsLine} color="text-green-500" name="Node.js" /></OrbitItem>
                        <OrbitItem angle={72} radius={240} duration={40}><SkillIcon Icon={SiExpress} color="text-gray-400" name="Express" /></OrbitItem>
                        <OrbitItem angle={144} radius={240} duration={40}><SkillIcon Icon={SiMongodb} color="text-green-400" name="MongoDB" /></OrbitItem>
                        <OrbitItem angle={216} radius={240} duration={40}><SkillIcon Icon={SiFirebase} color="text-yellow-500" name="Firebase" /></OrbitItem>
                        <OrbitItem angle={288} radius={240} duration={40}><SkillIcon Icon={RiCodeLine} color="text-white" name="JWT" /></OrbitItem>
                    </Orbit>
                </div>

                {/* --- Right Side: Skills Grid --- */}
                <div className="w-full lg:w-1/2 z-10">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {allSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className={`p-5 rounded-2xl bg-second-bg border border-gray-800 ${skill.color} shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--color-main)] transition-all duration-300`}>
                                    <skill.icon className="text-4xl" />
                                </div>
                                <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Background Stars/Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20 animate-pulse"
                        style={{
                            width: Math.random() * 3 + 1 + 'px',
                            height: Math.random() * 3 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDuration: Math.random() * 3 + 2 + 's'
                        }}
                    />
                ))}
            </div>

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-main/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};

export default Skills;
