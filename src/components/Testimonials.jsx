import React from 'react';
import { motion } from 'framer-motion';
import { RiStarFill, RiStarHalfLine } from 'react-icons/ri';
import img1 from '../assets/caca.jpg';
import img2 from '../assets/sokina.jpg';
import img3 from '../assets/safa.jpg';

const testimonialsData = [
    {
        name: 'Shawon',
        image: img1,
        rating: 4.5,
        text: 'Mahir is a highly skilled and professional software developer. He has an exceptional ability to understand project requirements and deliver solutions that exceed expectations.',
    },
    {
        name: 'Khadija Sokal',
        image: img2,
        rating: 5,
        text: 'Working with Mahir was an absolute pleasure. His problem-solving skills and dedication to his work are truly inspiring. He’s a team player who always delivers on time.',
    },
    {
        name: 'Shafayet',
        image: img3,
        rating: 4.5,
        text: 'Mahir’s expertise in web development is impressive. He has a knack for creating elegant, user-friendly designs while ensuring backend systems are robust and secure.',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="min-h-screen bg-bg py-24 px-[12%] flex flex-col items-center">
            <h2 className="text-5xl font-bold text-white mb-16">Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-second-bg p-8 rounded-[2rem] shadow-lg hover:bg-main hover:text-black hover:scale-105 transition-all duration-300 group cursor-pointer text-center"
                    >
                        <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-main group-hover:border-black transition-colors duration-300" />
                        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                        <div className="flex justify-center gap-1 text-main mb-4 group-hover:text-black">
                            {[...Array(Math.floor(item.rating))].map((_, i) => (
                                <RiStarFill key={i} />
                            ))}
                            {item.rating % 1 !== 0 && <RiStarHalfLine />}
                        </div>
                        <p className="text-base leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
// 