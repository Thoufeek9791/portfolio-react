import { CONTACT } from '../constants'
import { motion } from 'motion/react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className="py-20 sm:py-24 lg:py-32 relative">
      {/* Section glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
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
          Get in Touch
          <span className='w-8 h-px bg-[#7c3aed]' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='section-title text-center'
        >
          Let's <span className='gradient-text'>Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='section-subtitle'
        >
          Ready to collaborate? Let's build something amazing together
        </motion.p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto'>
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='glass-card p-6 sm:p-8'
        >
          <h3 className='font-display text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8'>Contact Info</h3>

          <div className='space-y-5 sm:space-y-6 mb-8 sm:mb-10'>
            {[
              { icon: FaMapMarkerAlt, label: 'Location', value: CONTACT.address, color: '#c084fc' },
              { icon: FaPhone, label: 'Phone', value: CONTACT.phoneNo, color: '#22d3ee' },
              { icon: FaEnvelope, label: 'Email', value: CONTACT.email, color: '#fb923c' },
            ].map((item, i) => (
              <div key={i} className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center'
                  style={{ background: `rgba(124,58,237,0.12)`, border: '1px solid rgba(124,58,237,0.25)' }}
                >
                  <item.icon style={{ color: item.color }} size={16} />
                </div>
                <div>
                  <div className='text-xs sm:text-sm text-[#9590b8] font-medium mb-0.5'>{item.label}</div>
                  <div className='text-sm sm:text-base text-[#d4d2ec] font-medium'>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <h4 className='text-sm font-semibold text-[#c8c5e2] mb-4'>Follow Me</h4>
          <div className='flex gap-3'>
            {[
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/thoufeek-rahuman-s-41b900255/', color: 'hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400/40' },
              { icon: FaGithub, href: 'https://github.com/Thoufeek9791', color: 'hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/40' },
              { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-400/40' },
              { icon: FaInstagram, href: '#', color: 'hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-400/40' },
            ].map(({ icon: Icon, href, color }, i) => (
              <motion.a
                key={i}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[#9590b8] transition-all duration-300 border border-[rgba(124,58,237,0.2)] bg-[rgba(124,58,237,0.05)] ${color}`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='glass-card p-6 sm:p-8 flex flex-col justify-between'
        >
          <div>
            <h3 className='font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4'>
              Have a project in mind?
            </h3>
            <p className='text-[#b8b5d0] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8'>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
            </p>
          </div>

          <div className='space-y-3 sm:space-y-4'>
            <a
              href={`mailto:${CONTACT.email}`}
              className='btn-primary w-full justify-center text-sm sm:text-base py-3.5 sm:py-4'
            >
              <FaEnvelope size={16} />
              Send an Email
              <FaArrowRight size={12} />
            </a>
            <a
              href='https://www.linkedin.com/in/thoufeek-rahuman-s-41b900255/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-secondary w-full justify-center text-sm sm:text-base py-3.5 sm:py-4'
            >
              <FaLinkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className='mt-6 sm:mt-8 flex items-center gap-2.5 px-4 py-3 rounded-xl'
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400' />
            </span>
            <span className='text-xs sm:text-sm text-emerald-300 font-medium'>
              Currently available for new projects
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className='mt-16 sm:mt-20 pt-8 border-t border-[rgba(124,58,237,0.15)] text-center'
      >
        <p className='text-xs sm:text-sm text-[#9590b8]'>
          © {new Date().getFullYear()} Thoufeek Rahuman. Built with
          <span className='text-[#a78bfa]'> React</span>,
          <span className='text-[#22d3ee]'> Tailwind CSS</span> &
          <span className='text-[#c084fc]'> Framer Motion</span>
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;