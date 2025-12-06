import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, phone, subject, message } = formData;

        if (!fullName || !email || !message) {
            toast.error("Please fill in all required fields (Name, Email, and Message).");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        const phonePattern = /^[+]?[0-9]{10,15}$/;
        if (phone && !phone.match(phonePattern)) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        const mailtoLink = `mailto:mahirsiam2004@gmail.com?subject=${encodeURIComponent(subject || "Contact Form Submission")}&body=${encodeURIComponent(
            `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        )}`;

        toast.success("Opening email client...");
        window.location.href = mailtoLink;
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="min-h-screen bg-bg py-24 px-[12%] flex flex-col items-center">
            <h2 className="text-5xl font-bold text-white mb-16">
                Contact <span className="text-main">Me</span>
            </h2>

            <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-second-bg p-10 rounded-3xl shadow-lg"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-4 text-lg bg-bg text-white rounded-xl border-2 border-transparent focus:border-main focus:bg-second-bg transition-all duration-300"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 text-lg bg-bg text-white rounded-xl border-2 border-transparent focus:border-main focus:bg-second-bg transition-all duration-300"
                    />
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 text-lg bg-bg text-white rounded-xl border-2 border-transparent focus:border-main focus:bg-second-bg transition-all duration-300"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-4 text-lg bg-bg text-white rounded-xl border-2 border-transparent focus:border-main focus:bg-second-bg transition-all duration-300"
                    />
                </div>
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 text-lg bg-bg text-white rounded-xl border-2 border-transparent focus:border-main focus:bg-second-bg transition-all duration-300 mb-8 resize-none"
                ></textarea>
                <input
                    type="submit"
                    value="Send Message"
                    className="w-full md:w-auto px-10 py-4 bg-main text-black rounded-full text-xl font-bold cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_var(--color-main)] transition-all duration-300 block mx-auto"
                />
            </motion.form>
        </section>
    );
};

export default Contact;
