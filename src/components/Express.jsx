import { EXPERIENCES } from "../constants";
import { generateKey } from "../utils/keygeneration";
import { motion } from "motion/react";

const Experiences = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h2>
            <div className="relative px-4 lg:px-20">
                {/* Vertical Center Line - Left aligned on mobile, Center on desktop */}
                <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 lg:transform lg:-translate-x-1/2" />

                {EXPERIENCES.map((experience, index) => (
                    <div 
                        key={generateKey(experience.year)} 
                        className={`mb-16 flex flex-wrap lg:flex-nowrap justify-between items-center w-full ${
                            index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                        }`}
                    >
                        {/* Content Card */}
                        <motion.div 
                            className="w-full lg:w-[45%] mb-8 lg:mb-0 pl-12 lg:pl-0"
                            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 lg:p-8 rounded-2xl hover:border-purple-500/50 transition-colors duration-300 relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur" />
                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-2 lg:gap-0">
                                        <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                                        <span className="text-sm text-purple-400 font-mono bg-neutral-900/50 px-2 py-1 rounded border border-neutral-800">{experience.year}</span>
                                    </div>
                                    <h4 className="text-lg text-neutral-300 mb-4 font-medium">{experience.company}</h4>
                                    <p className="text-neutral-400 mb-6 leading-relaxed text-sm lg:text-base">{experience.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech) => (
                                            <span 
                                                key={generateKey(tech)} 
                                                className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300 border border-neutral-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Timeline Node - Visible on mobile (left) and desktop (center) */}
                        <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                            <motion.div 
                                className="w-4 h-4 bg-purple-500 rounded-full border-4 border-neutral-950 z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            />
                        </div>

                        {/* Empty Space for Alignment */}
                        <div className="w-full lg:w-[45%] hidden lg:block" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiences;