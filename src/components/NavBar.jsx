import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="flex shrink-0 items-center">
                {/* <img src={logo} alt="logo" /> */}
                <motion.p
      className="text-4xl font-bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
       viewport={{ once: true }}
    >
      TR
    </motion.p>
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'> 
                <a href="https://www.linkedin.com/in/thoufeek-rahuman-s-41b900255/" target='_blank'><FaLinkedin/></a>
               {/* <Link to={''}> <FaLinkedin/></Link> */}
                <a href="https://github.com/Thoufeek9791" target='_blank'><FaGithub/></a>
                {/* <FaTwitter/>
                <FaInstagram/> */}

            </div>
        </nav>
    );
}

export default NavBar;