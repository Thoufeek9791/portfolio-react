import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    // Small delay to let menu close before scrolling
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -80 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#080810]/90 backdrop-blur-xl border-b border-[rgba(124,58,237,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between'>
        {/* Logo */}
        <motion.a
          href='#'
          className='relative font-display text-xl sm:text-2xl font-bold'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className='gradient-text'>TR</span>
        </motion.a>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex items-center gap-6 lg:gap-8'>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className='relative text-sm font-medium text-[#c8c5e2] hover:text-white transition-colors duration-300 group'
            >
              {link.label}
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] group-hover:w-full transition-all duration-300' />
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className='hidden md:flex items-center gap-3 lg:gap-4'>
          {[
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thoufeek-rahuman-s-41b900255/', color: 'hover:text-blue-400' },
            { icon: FaGithub, href: 'https://github.com/Thoufeek9791', color: 'hover:text-purple-300' },
            { icon: FaTwitter, href: '#', color: 'hover:text-sky-400' },
            { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' },
          ].map(({ icon: Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`text-[#9590b8] ${color} transition-colors duration-300`}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex flex-col gap-1.5 p-2'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label='Toggle navigation menu'
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className='block w-6 h-0.5 bg-white origin-center transition-all'
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className='block w-6 h-0.5 bg-white'
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className='block w-6 h-0.5 bg-white origin-center transition-all'
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-[#0a0a18]/98 backdrop-blur-xl border-t border-[rgba(124,58,237,0.2)]'
          >
            <div className='px-6 py-6 flex flex-col gap-1'>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className='text-[#e0dff5] hover:text-white font-medium transition-colors py-3 px-3 rounded-xl hover:bg-[rgba(124,58,237,0.1)] text-base'
                >
                  {link.label}
                </motion.a>
              ))}
              <div className='flex gap-4 pt-5 mt-2 border-t border-[rgba(124,58,237,0.2)] px-3'>
                {[
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thoufeek-rahuman-s-41b900255/' },
                  { icon: FaGithub, href: 'https://github.com/Thoufeek9791' },
                  { icon: FaTwitter, href: '#' },
                  { icon: FaInstagram, href: '#' },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} target='_blank' rel='noopener noreferrer'
                    className='text-[#b0adc8] hover:text-white transition-colors text-lg p-1'>
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;