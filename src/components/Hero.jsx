import { HERO_CONTENT } from "../constants";
import portfolio from '../assets/profile.jpeg'
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

    return (
        <div ref={ref} className="border-b border-neutral-900 pb-4 lg:mb-35 pt-28 relative overflow-hidden">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        className="flex flex-col items-center lg:items-start"
                        style={{ y, opacity }}
                    >
                        <motion.h1 
                            variants={container(0)} 
                            initial="hidden" 
                            animate="visible" 
                            className="pb-16 text-[2.2rem] lg:text-8xl font-thin tracking-tight lg:mt-16 whitespace-nowrap"
                        >
                            Thoufeek Rahuman
                        </motion.h1>
                        <motion.span 
                            variants={container(0.5)} 
                            initial="hidden" 
                            animate="visible" 
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Frontend Developer
                        </motion.span>
                        <motion.p 
                            variants={container(1)} 
                            initial="hidden" 
                            animate="visible" 
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </motion.div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                            initial={{ x: 100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 1, delay: 1.2 }}
                            style={{ y, scale }}
                            src={portfolio} 
                            alt="portfolio" 
                            className="lg:h-[40rem] rounded-2xl shadow-lg shadow-purple-500/20"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;