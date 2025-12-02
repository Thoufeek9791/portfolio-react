import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants';
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const About = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

    return (
        <div ref={ref} className="border-b border-neutral-900 pb-4 relative overflow-hidden">
            <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="my-20 text-center text-4xl"
            >
                About <span className="text-neutral-500">Me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center overflow-hidden">
                        <motion.img 
                            src={aboutImg} 
                            alt="aboutImg" 
                            className='rounded-2xl'
                            style={{ y, rotate }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='w-full lg:w-1/2'
                >
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 text-lg leading-relaxed'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;