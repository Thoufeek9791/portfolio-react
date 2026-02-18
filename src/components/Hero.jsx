import { HERO_CONTENT } from "../constants";
import portfolio from '../assets/profile.jpeg'
import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useState, useEffect } from "react"
import { FaArrowDown, FaFileDownload } from "react-icons/fa"

const roles = ['Senior Frontend Engineer', 'React & Next.js Specialist', 'Design System Architect', 'Performance Optimizer'];

const TypewriterText = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout;

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    } else {
      const delta = isDeleting ? 60 : 100;
      timeout = setTimeout(() => {
        setCurrentText(isDeleting
          ? word.substring(0, currentText.length - 1)
          : word.substring(0, currentText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, words]);

  return (
    <span className='gradient-text font-display'>
      {currentText}
      <span className='cursor-blink text-[#a78bfa] ml-0.5'>|</span>
    </span>
  );
};

const FloatingOrb = ({ size, color, delay, top, left, right, bottom }) => (
  <motion.div
    className='absolute rounded-full pointer-events-none'
    style={{
      width: size, height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      top, left, right, bottom,
      filter: 'blur(50px)',
    }}
    animate={{
      y: [0, -25, 0],
      scale: [1, 1.08, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} id='hero' className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Floating Orbs — toned down */}
      <FloatingOrb size='250px' color='rgba(124,58,237,0.3)' delay={0} top='10%' left='-5%' />
      <FloatingOrb size='180px' color='rgba(6,182,212,0.2)' delay={2} top='60%' right='-5%' />
      <FloatingOrb size='120px' color='rgba(236,72,153,0.15)' delay={4} bottom='20%' left='40%' />

      <motion.div style={{ y, opacity }} className="w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 sm:mb-6 text-xs font-mono-custom font-semibold'
              style={{
                background: 'rgba(124, 58, 237, 0.15)',
                border: '1px solid rgba(124, 58, 237, 0.4)',
                color: '#c4b5fd',
              }}
            >
              <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse' />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-3 sm:mb-4 text-white'
            >
              Thoufeek
              <br />
              <span className='gradient-text'>Rahuman</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-5 sm:mb-6 h-8 sm:h-10'
            >
              <TypewriterText words={roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='text-[#c8c5e2] text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10'
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start mb-8 sm:mb-10'
            >
              <a href='#projects' className='btn-primary justify-center sm:justify-start'>
                View My Work
                <FaArrowDown size={12} className='animate-bounce' />
              </a>
              <a
                href='/resume.pdf'
                download='Thoufeek_Rahuman_Resume.pdf'
                className='btn-secondary justify-center sm:justify-start gap-2'
              >
                <FaFileDownload size={14} />
                Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className='flex gap-6 sm:gap-8 justify-center lg:justify-start'
            >
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '50+', label: 'Components' },
                { value: '10+', label: 'Projects' },
              ].map((stat) => (
                <div key={stat.label} className='text-center lg:text-left'>
                  <div className='font-display text-xl sm:text-2xl font-bold gradient-text'>{stat.value}</div>
                  <div className='text-xs text-[#9590b8] mt-0.5'>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 80 }}
            className='flex-shrink-0 relative mt-8 lg:mt-0'
          >
            {/* Decorative ring */}
            <div className='absolute inset-[-20px] rounded-full border border-[rgba(124,58,237,0.15)] animate-spin-slow hidden sm:block' />
            <div className='absolute inset-[-40px] rounded-full border border-[rgba(6,182,212,0.08)] hidden sm:block' style={{ animation: 'spin 30s linear infinite reverse' }} />

            {/* Glow behind image — reduced */}
            <div className='absolute inset-0 rounded-3xl'
              style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)', filter: 'blur(30px)' }}
            />

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className='relative'
            >
              <img
                src={portfolio}
                alt='Thoufeek Rahuman'
                className='relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-3xl'
                style={{
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  boxShadow: '0 0 40px rgba(124, 58, 237, 0.2), 0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
              {/* Corner accents */}
              <div className='absolute top-3 left-3 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#7c3aed] rounded-tl-lg' />
              <div className='absolute top-3 right-3 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#06b6d4] rounded-tr-lg' />
              <div className='absolute bottom-3 left-3 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#06b6d4] rounded-bl-lg' />
              <div className='absolute bottom-3 right-3 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-[#7c3aed] rounded-br-lg' />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className='absolute -right-2 sm:-right-4 top-6 sm:top-8 glass-card px-3 sm:px-4 py-2 sm:py-3'
              style={{ animation: 'float 5s ease-in-out infinite' }}
            >
              <div className='text-[10px] sm:text-xs text-[#b0adc8]'>Experience</div>
              <div className='font-display font-bold text-sm sm:text-base text-white'>3+ Years</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className='absolute -left-2 sm:-left-4 bottom-8 sm:bottom-12 glass-card px-3 sm:px-4 py-2 sm:py-3'
              style={{ animation: 'float 7s ease-in-out infinite 1s' }}
            >
              <div className='text-[10px] sm:text-xs text-[#b0adc8]'>Projects</div>
              <div className='font-display font-bold text-sm sm:text-base text-white'>10+ Built</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator — brighter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-[10px] sm:text-xs text-[#9590b8] font-mono-custom tracking-widest uppercase'>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-px h-8 sm:h-12 bg-gradient-to-b from-[#a78bfa] to-transparent'
        />
      </motion.div>
    </section>
  );
}

export default Hero;