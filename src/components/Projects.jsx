import { PROJECTS } from "../constants";
import { generateKey } from "../utils/keygeneration";
import {motion} from 'motion/react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
             initial={{opacity: 0,y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
            className="my-20 text-center text-4xl">Projects</motion.h2>
            <div >{PROJECTS.map(project => (
                <div href={project.link} key={generateKey(project.title)} className="mb-8 flex flex-wrap lg:justify-center relative" >
                    <motion.div 
                    viewport={{ once: true }}
                     whileInView={{opacity: 1, x: 0}}
             initial={{opacity: 0, x: -100}}
             transition={{duration: 0.5}}
                    className="w-full lg:w-1/4">
                    <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded"/>
                    </motion.div>
                    <motion.div 
                    viewport={{ once: true }}
                     whileInView={{opacity: 1, x: 0}}
             initial={{opacity: 0, x: 100}}
             transition={{duration: 0.5}}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <motion.a viewport={{ once: true }}
                     whileInView={{opacity: 1, x: 0}}
             initial={{opacity: 0, x: -100}}
             transition={{duration: 0.5}} className="absolute right-0 top-0 transition-all" href={project.link} target="_blank"><FaExternalLinkAlt className="text-white" /></motion.a>
                    <div className="flex gap-2 flex-wrap">
                        {
                        project.technologies.map(tech => (
                            <span key={generateKey(tech)} className=" rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                        ))
                    }
                    </div>
                    </motion.div>
                </div>
            ))}</div>
        </div>
    );
}

export default Projects;