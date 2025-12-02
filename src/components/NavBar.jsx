import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-8 fixed top-0 w-full z-50 backdrop-blur-md bg-premium-black/30 border-b border-neutral-800/50">
            <div className="flex shrink-0 items-center">
                <motion.p
                    className="text-4xl font-bold cursor-pointer text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
                >
                    TR
                </motion.p>
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'> 
                <motion.a 
                    href="https://www.linkedin.com/in/thoufeek-rahuman-s-41b900255/" 
                    target='_blank'
                    className="text-white hover:text-blue-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaLinkedin/>
                </motion.a>
                <motion.a 
                    href="https://github.com/Thoufeek9791" 
                    target='_blank'
                    className="text-white hover:text-purple-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaGithub/>
                </motion.a>
                <motion.a 
                    href="#" 
                    target='_blank'
                    className="text-white hover:text-sky-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaTwitter/>
                </motion.a>
                <motion.a 
                    href="#" 
                    target='_blank'
                    className="text-white hover:text-pink-500 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <FaInstagram/>
                </motion.a>
            </div>
        </nav>
    );
}

export default NavBar;