import { SiVite, SiWebpack, SiEslint, SiPostman, SiGit, SiFigma, SiVercel, SiClaude } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbSparkles, TbRobot } from "react-icons/tb";
import { motion } from 'motion/react'

const tools = [
  { icon: SiVite, name: 'Vite', description: 'Build tool', color: '#c084fc', glow: 'rgba(192,132,252,0.4)' },
  { icon: SiWebpack, name: 'Webpack', description: 'Module bundler', color: '#60a5fa', glow: 'rgba(96,165,250,0.4)' },
  { icon: SiEslint, name: 'ESLint', description: 'Linting', color: '#a78bfa', glow: 'rgba(167,139,250,0.4)' },
  { icon: SiPostman, name: 'Postman', description: 'API testing', color: '#fb923c', glow: 'rgba(251,146,60,0.4)' },
  { icon: SiGit, name: 'Git', description: 'Version control', color: '#f87171', glow: 'rgba(248,113,113,0.4)' },
  { icon: SiFigma, name: 'Figma', description: 'UI design', color: '#f472b6', glow: 'rgba(244,114,182,0.4)' },
  { icon: VscVscode, name: 'VS Code', description: 'Code editor', color: '#38bdf8', glow: 'rgba(56,189,248,0.4)' },
  { icon: SiVercel, name: 'Vercel', description: 'Deployment', color: '#e2e8f0', glow: 'rgba(226,232,240,0.3)' },
  { icon: TbSparkles, name: 'Cursor AI', description: 'AI code editor', color: '#fbbf24', glow: 'rgba(251,191,36,0.4)' },
  { icon: TbRobot, name: 'Antigravity', description: 'AI coding agent', color: '#34d399', glow: 'rgba(52,211,153,0.4)' },
  { icon: SiClaude, name: 'Claude Code', description: 'AI assistant', color: '#f0a97a', glow: 'rgba(240,169,122,0.4)' },
];

const ToolCard = ({ tool, index }) => {
  const Icon = tool.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className='group relative glass-card p-5 sm:p-6 flex flex-col items-center gap-3 cursor-default transition-all duration-300'
    >
      {/* Hover glow */}
      <div
        className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
        style={{ background: `radial-gradient(circle at center, ${tool.glow} 0%, transparent 70%)`, filter: 'blur(20px)' }}
      />

      {/* Icon */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        className='relative z-10'
      >
        <Icon style={{ color: tool.color, fontSize: 'clamp(2rem, 5vw, 3rem)' }} />
      </motion.div>

      {/* Name & Description */}
      <div className='relative z-10 text-center'>
        <div className='text-sm font-semibold text-[#d4d2ec] group-hover:text-white transition-colors'>{tool.name}</div>
        <div className='text-[10px] sm:text-xs text-[#9590b8] mt-0.5'>{tool.description}</div>
      </div>
    </motion.div>
  );
};

const Tools = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className='flex flex-col items-center mb-12 sm:mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='section-label'
        >
          <span className='w-8 h-px bg-[#7c3aed]' />
          My Toolkit
          <span className='w-8 h-px bg-[#7c3aed]' />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='section-title text-center'
        >
          Dev <span className='gradient-text'>Tools</span> & <span className='gradient-text'>AI Agents</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='section-subtitle'
        >
          Tools, platforms, and AI agents that power my development workflow
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {tools.map((tool, index) => (
          <ToolCard key={tool.name} tool={tool} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Tools;