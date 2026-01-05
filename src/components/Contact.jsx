import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { RiMailLine, RiPhoneLine, RiWhatsappLine } from 'react-icons/ri';

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

    const contactInfo = {
        email: 'mahirsiam2004@gmail.com',
        phone: '+880 1921899394', // Update with your actual phone number
        whatsapp: '+880 1921899394', // Update with your actual WhatsApp number
    };

    return (
        <section id="contact" className="min-h-screen bg-bg py-24 px-[12%] flex flex-col items-center">
            <h2 className="text-5xl font-bold text-white mb-16">
                Contact <span className="text-main">Me</span>
            </h2>

            {/* Direct Contact Information */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl mb-12"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="bg-second-bg p-6 rounded-2xl hover:bg-main hover:text-black transition-all duration-300 group cursor-pointer"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-bg rounded-full flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-main transition-all duration-300">
                                <RiMailLine className="text-main text-2xl group-hover:text-main" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-400 group-hover:text-black break-all">{contactInfo.email}</p>
                        </div>
                    </a>

                    {/* Phone */}
                    <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        className="bg-second-bg p-6 rounded-2xl hover:bg-main hover:text-black transition-all duration-300 group cursor-pointer"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-bg rounded-full flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-main transition-all duration-300">
                                <RiPhoneLine className="text-main text-2xl group-hover:text-main" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-gray-400 group-hover:text-black">{contactInfo.phone}</p>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-second-bg p-6 rounded-2xl hover:bg-main hover:text-black transition-all duration-300 group cursor-pointer"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-bg rounded-full flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-main transition-all duration-300">
                                <RiWhatsappLine className="text-main text-2xl group-hover:text-main" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                            <p className="text-gray-400 group-hover:text-black">{contactInfo.whatsapp}</p>
                        </div>
                    </a>
                </div>
            </motion.div>

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
