import { PROJECTS } from '../constants'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-28 relative`}
    >
      {/* Ghost project number — brighter */}
      <div className={`absolute -top-8 sm:-top-12 ${isEven ? 'left-0 lg:left-[-1rem]' : 'right-0 lg:right-[-1rem]'} font-display text-[80px] sm:text-[120px] lg:text-[180px] font-bold leading-none pointer-events-none select-none`}
        style={{ color: 'rgba(124,58,237,0.06)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Image */}
      <div className='flex-1 w-full relative group rounded-2xl overflow-hidden'
        style={{
          border: '1px solid rgba(124,58,237,0.2)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <motion.div style={{ y: imageY }} className='w-full'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-48 sm:h-56 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105'
          />
        </motion.div>

        {/* Hover overlay */}
        <div className='absolute inset-0 bg-[rgba(5,5,8,0.6)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm'>
          <div className='glass-card px-5 py-3 flex items-center gap-3'>
            <FaExternalLinkAlt className='text-[#c4b5fd]' size={14} />
            <span className='text-sm font-medium text-white'>View Project</span>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className='absolute inset-x-0 bottom-0 h-16'
          style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.6), transparent)' }}
        />
      </div>

      {/* Content */}
      <div className='flex-1 space-y-4 sm:space-y-5'>
        <h3 className='font-display text-2xl sm:text-3xl font-bold text-white'>
          {project.title}
        </h3>

        <p className='text-[#b8b5d0] text-sm sm:text-base leading-relaxed'>
          {project.description}
        </p>

        {/* Tech badges */}
        <div className='flex flex-wrap gap-1.5 sm:gap-2'>
          {project.technologies.map((tech) => (
            <span key={tech} className='tech-badge text-[10px] sm:text-xs'>
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className='flex gap-3 sm:gap-4 pt-2'>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary text-xs sm:text-sm py-2.5 px-5'
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='btn-secondary text-xs sm:text-sm py-2.5 px-5'
            >
              <FaGithub size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className="py-20 sm:py-24 lg:py-32 relative">
      <div className='flex flex-col items-center mb-12 sm:mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='section-label'
        >
          <span className='w-8 h-px bg-[#7c3aed]' />
          My Work
          <span className='w-8 h-px bg-[#7c3aed]' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='section-title text-center'
        >
          Featured <span className='gradient-text'>Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='section-subtitle'
        >
          A showcase of projects that define my craft and creativity
        </motion.p>
      </div>

      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;