import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'Education', to: 'education' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Services', to: 'services' },
        { name: 'Testimonials', to: 'testimonials' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full px-[12%] py-4 md:py-6 flex justify-between items-center z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <Link to="home" smooth={true} duration={500} className="fancy text-3xl font-extrabold text-white cursor-pointer hover:scale-110 transition-transform duration-300">
                Mahir <span className="text-main drop-shadow-[0_0_25px_var(--color-main)]">Shiyam</span>
            </Link>

            <div className="md:hidden text-4xl text-main cursor-pointer z-50" onClick={toggleMenu}>
                {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </div>

            <nav
                className={`absolute top-full left-0 w-full bg-second-bg md:bg-transparent md:static md:w-auto md:flex flex-col md:flex-row items-center gap-8 p-8 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="text-main border-b-2 border-main"
                        className="text-lg font-medium text-white hover:text-main hover:border-b-2 hover:border-main transition-all duration-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
