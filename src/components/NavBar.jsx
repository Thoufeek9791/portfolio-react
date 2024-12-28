import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="flex shrink-0 items-center">
                <img src={logo} alt="logo" />
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'> 
                <FaLinkedin/>
                <FaGithub/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
        </nav>
    );
}

export default NavBar;