import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiTypescript, SiNextdotjs, SiFramer, SiStorybook } from "react-icons/si";
import { motion } from 'motion/react'

const technologies = [
  { icon: RiReactjsLine, name: 'React', color: '#22d3ee', glow: 'rgba(34,211,238,0.4)', level: 95 },
  { icon: SiNextdotjs, name: 'Next.js', color: '#e2e8f0', glow: 'rgba(226,232,240,0.3)', level: 90 },
  { icon: SiTypescript, name: 'TypeScript', color: '#60a5fa', glow: 'rgba(96,165,250,0.4)', level: 85 },
  { icon: RiTailwindCssFill, name: 'Tailwind', color: '#22d3ee', glow: 'rgba(34,211,238,0.4)', level: 92 },
  { icon: SiRedux, name: 'Redux Toolkit', color: '#c4b5fd', glow: 'rgba(196,181,253,0.4)', level: 88 },
  { icon: SiFramer, name: 'Framer Motion', color: '#f472b6', glow: 'rgba(244,114,182,0.4)', level: 82 },
  { icon: FaNodeJs, name: 'Node.js', color: '#a3e635', glow: 'rgba(163,230,53,0.4)', level: 75 },
  { icon: SiStorybook, name: 'Storybook', color: '#fb923c', glow: 'rgba(251,146,60,0.4)', level: 80 },
];

const TechCard = ({ tech, index }) => {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className='group relative glass-card p-5 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 cursor-default transition-all duration-300'
    >
      {/* Hover glow */}
      <div
        className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
        style={{ background: `radial-gradient(circle at center, ${tech.glow} 0%, transparent 70%)`, filter: 'blur(20px)' }}
      />

      {/* Icon */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        className='relative z-10'
      >
        <Icon style={{ color: tech.color, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }} />
      </motion.div>

      {/* Name */}
      <span className='relative z-10 text-sm font-semibold text-[#d4d2ec] group-hover:text-white transition-colors'>
        {tech.name}
      </span>

      {/* Progress bar */}
      <div className='relative z-10 w-full'>
        <div className='flex justify-between text-[10px] sm:text-xs mb-1.5'>
          <span className='text-[#9590b8] font-medium'>Proficiency</span>
          <span className='text-[#c4b5fd] font-semibold'>{tech.level}%</span>
        </div>
        <div className='w-full h-1.5 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden'>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
            className='h-full rounded-full'
            style={{ background: `linear-gradient(90deg, ${tech.color}, ${tech.glow})` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Technology = () => {
  return (
    <section id='skills' className="py-20 sm:py-24 lg:py-32 relative">
      <div className='flex flex-col items-center mb-12 sm:mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='section-label'
        >
          <span className='w-8 h-px bg-[#7c3aed]' />
          What I Use
          <span className='w-8 h-px bg-[#7c3aed]' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='section-title text-center'
        >
          Tech <span className='gradient-text'>Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='section-subtitle'
        >
          Technologies I work with to build modern, performant web applications
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Technology;