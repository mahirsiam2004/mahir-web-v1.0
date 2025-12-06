import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
    {
        title: 'UI Design',
        description: 'I design visually appealing and user-friendly interfaces that enhance the user experience. My goal is to create designs that are both functional and aesthetically pleasing.',
    },
    {
        title: 'Frontend Development',
        description: 'With expertise in HTML, CSS, and JavaScript, I specialize in building responsive and dynamic user interfaces that work seamlessly across devices.',
    },
    {
        title: 'Backend Development',
        description: 'I develop secure and scalable backend systems using robust frameworks. My solutions ensure efficient data management and seamless communication between front and backend.',
    },
    {
        title: 'Problem Solving',
        description: 'As a passionate programmer and problem solver, I have achieved a 1000+ rating on Codeforces, showcasing my ability to tackle algorithmic challenges effectively.',
    },
];

const Services = () => {
    return (
        <section id="services" className="min-h-screen bg-bg py-24 px-[12%] text-center">
            <h2 className="text-5xl font-bold text-white mb-16">Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-main h-[300px] rounded-[3rem] border-[5px] border-transparent p-10 flex flex-col justify-center items-start text-left hover:bg-white hover:text-black hover:border-main hover:scale-105 transition-all duration-500 cursor-pointer group"
                    >
                        <h4 className="text-4xl font-extrabold mb-4 leading-tight">{service.title}</h4>
                        <p className="text-xl font-semibold leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
