import { CONTACT } from "../constants";
import { motion } from 'motion/react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                className="my-10 text-center text-4xl"
            >
                Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="my-4"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="my-4"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a 
                    href={`mailto:${CONTACT.email}`}
                    className="border-b border-neutral-900 hover:border-purple-500 hover:text-purple-500 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    {CONTACT.email}
                </motion.a>
            </div>

            <div className="mt-20 flex justify-center gap-6 text-2xl">
                <motion.a 
                    href="https://www.linkedin.com/in/thoufeek-rahuman-s-41b900255/" 
                    target='_blank'
                    className="text-neutral-400 hover:text-blue-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaLinkedin/>
                </motion.a>
                <motion.a 
                    href="https://github.com/Thoufeek9791" 
                    target='_blank'
                    className="text-neutral-400 hover:text-purple-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaGithub/>
                </motion.a>
                <motion.a 
                    href="#" 
                    target='_blank'
                    className="text-neutral-400 hover:text-sky-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaTwitter/>
                </motion.a>
                <motion.a 
                    href="#" 
                    target='_blank'
                    className="text-neutral-400 hover:text-pink-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaInstagram/>
                </motion.a>
            </div>

            <div className="mt-8 text-center text-sm text-neutral-500">
                <p>&copy; {new Date().getFullYear()} Thoufeek Rahuman. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Contact;