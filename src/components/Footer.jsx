import React from 'react';
import { RiFacebookFill, RiInstagramFill, RiTelegramFill, RiGithubFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-second-bg py-16 px-[12%] text-center flex flex-col items-center gap-8">
            <div className="flex gap-6">
                <a href="https://www.facebook.com/profile.php?id=61550841904693" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-12 h-12 bg-transparent border-2 border-main rounded-full text-main hover:bg-main hover:text-bg hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_var(--color-main)] transition-all duration-300">
                    <RiFacebookFill size={24} />
                </a>
                <a href="https://www.instagram.com/mahirsiam2004/" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-12 h-12 bg-transparent border-2 border-main rounded-full text-main hover:bg-main hover:text-bg hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_var(--color-main)] transition-all duration-300">
                    <RiInstagramFill size={24} />
                </a>
                <a href="https://t.me/mahirsiam" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-12 h-12 bg-transparent border-2 border-main rounded-full text-main hover:bg-main hover:text-bg hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_var(--color-main)] transition-all duration-300">
                    <RiTelegramFill size={24} />
                </a>
                <a href="https://github.com/mahirsiam2004" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center w-12 h-12 bg-transparent border-2 border-main rounded-full text-main hover:bg-main hover:text-bg hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_var(--color-main)] transition-all duration-300">
                    <RiGithubFill size={24} />
                </a>
            </div>

            <ul className="flex flex-wrap justify-center gap-8 text-lg">
                <li><a href="#faq" className="text-white hover:text-main transition-colors duration-300">FAQ</a></li>
                <li><a href="#services" className="text-white hover:text-main transition-colors duration-300">Service</a></li>
                <li><a href="#about" className="text-white hover:text-main transition-colors duration-300">About me</a></li>
                <li><a href="#contact" className="text-white hover:text-main transition-colors duration-300">Contact</a></li>
            </ul>

            <p className="text-base font-light mt-4">
                Mahir Siam | All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
