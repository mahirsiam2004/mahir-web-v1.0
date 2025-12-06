import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RiFacebookFill, RiTelegramFill, RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { FaReact, FaJsSquare } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    // Parallax transformation for the background "code" element
    const yCode = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    // Parallax transformation for the 3D icons
    const yIcon1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const yIcon2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    // Staggered Text Animation Variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
            }
        },
    };

    return (
        <section
            id="home"
            ref={targetRef}
            className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white overflow-hidden py-32 md:py-40 px-6"
        >

            {/* --- Aesthetic 3D Icon Elements (Parallax & Animation) --- */}

            {/* React Icon: Floating/Rotating */}
            <motion.div
                style={{ y: yIcon1 }}
                animate={{ rotate: 360, x: [0, 10, 0], y: [0, 10, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] left-[10%] opacity-10 text-main md:text-[200px] text-9xl z-0"
            >
                <FaReact size="1em" className="drop-shadow-[0_0_20px_var(--color-main)]" />
            </motion.div>

            {/* JavaScript Icon: Floating/Rotating */}
            <motion.div
                style={{ y: yIcon2 }}
                animate={{ rotate: -360, x: [0, -15, 0], y: [0, -15, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-[20%] right-[15%] opacity-10 text-yellow-500 md:text-[150px] text-7xl z-0"
            >
                <FaJsSquare size="1em" className="drop-shadow-[0_0_20px_#facc15]" />
            </motion.div>

            {/* Subtle Background Code Grid (Parallax Effect) */}
            <motion.div
                style={{ y: yCode }}
                className="absolute inset-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"
            />

            {/* --- Main Content (Centered) --- */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="max-w-5xl z-10"
            >
                <motion.p variants={item} className="text-xl md:text-2xl font-light text-gray-400 mb-4 tracking-widest">
                    Hello, I am
                </motion.p>

                {/* Dramatic Main Text */}
                <motion.h1 variants={item} className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-main to-cyan-300 drop-shadow-[0_0_35px_rgba(0,188,212,0.8)]">
                        MAHIR SHIYAM MUHIN
                    </span>
                    <span className="text-main">.</span>
                </motion.h1>

                {/* Title */}
                <motion.h2 variants={item} className="text-2xl md:text-4xl font-bold text-gray-200 mb-6 tracking-widest uppercase">
                    MERN STACK DEVELOPER
                </motion.h2>

                <motion.p variants={item} className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-3xl mx-auto text-gray-400">
                    MERN Stack Developer with strong expertise in JavaScript, React.js, Node.js, Express, and MongoDB. Passionate about building scalable web systems and solving real-world problems. Competitive programmer with 800+ solved problems across online judges. Seeking opportunities to grow as a full-stack developer and contribute to impactful projects.
                </motion.p>

                {/* --- Call To Action Buttons --- */}
                <motion.div variants={item} className="flex justify-center gap-6 mb-12">
                    <Link to="projects" smooth={true} duration={500} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-main to-cyan-400 group-hover:from-main group-hover:to-cyan-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-main/50 cursor-pointer">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 text-lg font-bold">
                            View Work
                        </span>
                    </Link>

                    <Link to="contact" smooth={true} duration={500} className="inline-block px-6 py-3 bg-transparent text-main border-2 border-main rounded-lg text-lg font-bold hover:bg-main hover:text-gray-900 transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(0,188,212,0.5)]">
                        Get In Touch
                    </Link>
                </motion.div>

                {/* --- Social Icons (Minimalist) --- */}
                <motion.div variants={item} className="flex justify-center gap-6">
                    {[
                        { href: "https://www.linkedin.com/in/mahirsiam2004/", Icon: RiLinkedinFill },
                        { href: "https://github.com/mahirsiam2004", Icon: RiGithubFill },
                        { href: "https://www.facebook.com/profile.php?id=61550841904693", Icon: RiFacebookFill },
                        { href: "https://t.me/mahirsiam", Icon: RiTelegramFill },
                    ].map(({ href, Icon }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-main transition-colors duration-300"
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Hero;