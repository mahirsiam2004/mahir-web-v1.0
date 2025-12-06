import React from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Codeforces from './components/Codeforces';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
    return (
        <Layout>
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Codeforces />
            <Services />
            <Testimonials />
            <Contact />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: '#1f2937',
                        color: '#fff',
                        border: '1px solid #00bcd4',
                    },
                    success: {
                        iconTheme: {
                            primary: '#00bcd4',
                            secondary: '#fff',
                        },
                    },
                }}
            />
        </Layout>
    );
}

export default App;
