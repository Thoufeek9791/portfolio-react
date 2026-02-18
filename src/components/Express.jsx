import { EXPERIENCES } from '../constants'
import { motion } from 'motion/react'

const Express = () => {
  return (
    <section id='experience' className="py-20 sm:py-24 lg:py-32 relative">
      <div className='flex flex-col items-center mb-12 sm:mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='section-label'
        >
          <span className='w-8 h-px bg-[#7c3aed]' />
          My Journey
          <span className='w-8 h-px bg-[#7c3aed]' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='section-title text-center'
        >
          Work <span className='gradient-text'>Experience</span>
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className='relative max-w-4xl mx-auto'>
        {/* Center line — brighter */}
        <div className='absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px'>
          <div className='w-full h-full bg-gradient-to-b from-[#7c3aed] via-[#a78bfa] to-transparent opacity-50' />
        </div>

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-start gap-6 sm:gap-8 mb-10 sm:mb-14 ${
              index % 2 === 0
                ? 'lg:flex-row lg:pr-[calc(50%+2rem)]'
                : 'lg:flex-row-reverse lg:pl-[calc(50%+2rem)]'
            }`}
          >
            {/* Timeline Node */}
            <div
              className='absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 flex-shrink-0 z-10'
            >
              <div className='w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#7c3aed] border-2 border-[#0d0d14]'
                style={{ boxShadow: '0 0 15px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.2)' }}
              />
              <div className='absolute inset-0 rounded-full bg-[#7c3aed] animate-ping opacity-30' />
            </div>

            {/* Card */}
            <div className={`ml-10 sm:ml-14 lg:ml-0 flex-1 group`}>
              <motion.div
                whileHover={{ y: -4 }}
                className='glass-card p-5 sm:p-6 lg:p-7 relative overflow-hidden transition-all duration-300'
              >
                {/* Hover glow */}
                <div className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
                  style={{ background: 'radial-gradient(circle at center, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
                />

                {/* Year badge */}
                <div className='inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4'
                  style={{
                    background: 'rgba(124, 58, 237, 0.15)',
                    border: '1px solid rgba(124, 58, 237, 0.35)',
                    color: '#c4b5fd',
                  }}
                >
                  {exp.year}
                </div>

                <h3 className='font-display text-lg sm:text-xl font-bold text-white mb-1.5'>
                  {exp.role}
                </h3>
                <p className='text-[#a78bfa] text-sm sm:text-base font-medium mb-3 sm:mb-4'>
                  {exp.company}
                </p>
                <p className='text-[#b8b5d0] text-sm leading-relaxed mb-4 sm:mb-5'>
                  {exp.description}
                </p>

                {/* Tech badges */}
                <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className='tech-badge text-[10px] sm:text-xs'>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Express;