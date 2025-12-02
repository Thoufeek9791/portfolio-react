import { PROJECTS } from "../constants";
import { generateKey } from "../utils/keygeneration";
import { motion, useScroll, useTransform } from 'motion/react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 1 ? -3 : 3, index % 2 === 1 ? 3 : -3])

    return (
        <motion.div 
            ref={ref}
            key={generateKey(project.title)} 
            className={`mb-20 flex flex-wrap lg:flex-nowrap items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className="w-full lg:w-1/2"
                style={{ scale, rotate }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl shadow-purple-900/20">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
            </motion.div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.h3 
                    className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {project.title}
                </motion.h3>
                <motion.p 
                    className="mb-6 text-neutral-400 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, i) => (
                        <motion.span 
                            key={generateKey(tech)} 
                            className="px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800 text-sm font-medium text-purple-300 hover:bg-purple-900/20 hover:border-purple-500/50 transition-colors cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a 
                        href={project.link} 
                        target="_blank" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-purple-500/30"
                    >
                        View Project <FaExternalLinkAlt size={14} />
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div className="px-4 lg:px-20">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={generateKey(project.title)} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Projects;