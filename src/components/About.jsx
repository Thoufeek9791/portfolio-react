import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants';
import { motion } from "motion/react"

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Components Built' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '95', label: 'Lighthouse Score' },
];

const About = () => {
  return (
    <section id='about' className="py-20 sm:py-24 lg:py-32 relative">
      {/* Section glow — subtle */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.04) 0%, transparent 70%)' }}
      />

      <div className='flex flex-col items-center mb-12 sm:mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='section-label'
        >
          <span className='w-8 h-px bg-[#7c3aed]' />
          Who I Am
          <span className='w-8 h-px bg-[#7c3aed]' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='section-title text-center'
        >
          About <span className='gradient-text'>Me</span>
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-20">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0"
        >
          {/* Decorative background card */}
          <div className='absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full rounded-3xl'
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))', border: '1px solid rgba(124,58,237,0.2)' }}
          />
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className='relative'
          >
            <img
              src={aboutImg}
              alt='About Thoufeek'
              className='relative w-full rounded-3xl object-cover'
              style={{
                border: '1px solid rgba(124, 58, 237, 0.25)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(124,58,237,0.1)',
              }}
            />
            {/* Overlay gradient */}
            <div className='absolute inset-0 rounded-3xl'
              style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.3) 0%, transparent 40%)' }}
            />
          </motion.div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex-1'
        >
          <p className='text-[#c8c5e2] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10'>
            {ABOUT_TEXT}
          </p>

          {/* Stats Grid */}
          <div className='grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10'>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className='glass-card p-4 sm:p-5 text-center group transition-colors duration-300'
              >
                <div className='font-display text-2xl sm:text-3xl font-bold gradient-text mb-1'>{stat.value}</div>
                <div className='text-xs sm:text-sm text-[#9590b8]'>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skills chips */}
          <div className='flex flex-wrap gap-2'>
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Storybook', 'Radix UI', 'Framer Motion', 'Node.js'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i + 0.5 }}
                className='tech-badge'
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;