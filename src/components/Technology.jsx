import { BiLogoMongodb } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaSass } from "react-icons/fa";
import { RiNextjsLine, RiNodejsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {motion} from 'motion/react'

const Technology = () => {

    const iconVariations = (duration) => ({
        initial: {y: -10},
        animate: {
            y: [10,-10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
            initial={{opacity: 0,y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
             className="my-20 text-center text-4xl">Technology</motion.h2>
            <motion.div 
            initial={{opacity: 0,x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1.5}}
             className="flex flex-wrap items-center justify-center gap-4">
                
                    <motion.div 
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-6xl text-cyan-400"/>
                    </motion.div>
                    <motion.div
                    variants={iconVariations(3)}
                    initial='initial'
                    animate='animate'
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-6xl"/>
                        
                    </motion.div>
                    <motion.div 
                    variants={iconVariations(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-6xl text-cyan-400"/>
                        
                    </motion.div>
                    <motion.div 
                    variants={iconVariations(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaSass className="text-6xl text-pink-500"/>
                        
                    </motion.div>
                    <motion.div 
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        
                    <SiRedux className="text-6xl text-purple-800"/>
                    </motion.div>
                    <motion.div
                    variants={iconVariations(6)}
                    initial='initial'
                    animate='animate'
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-6xl text-lime-500"/>
                        
                    </motion.div>
                    <motion.div
                    variants={iconVariations(4)}
                    initial='initial'
                    animate='animate'
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                        
                    <BiLogoMongodb className="text-6xl text-green-500"/>
                    </motion.div>
                    
                
            </motion.div>
        </div>
    );
}

export default Technology;