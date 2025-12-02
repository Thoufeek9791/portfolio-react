import { BiLogoMongodb } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaSass } from "react-icons/fa";
import { RiNextjsLine, RiNodejsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {motion} from 'motion/react'

const Technology = () => {

    const iconVariations = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
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
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technology
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#22d3ee", boxShadow: "0px 0px 15px rgba(34, 211, 238, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariations(3)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#ffffff", boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariations(5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#22d3ee", boxShadow: "0px 0px 15px rgba(34, 211, 238, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <RiTailwindCssFill className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariations(2)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#ec4899", boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <FaSass className="text-7xl text-pink-500" />
                </motion.div>
                <motion.div
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#6b21a8", boxShadow: "0px 0px 15px rgba(107, 33, 168, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <SiRedux className="text-7xl text-purple-800" />
                </motion.div>
                <motion.div
                    variants={iconVariations(6)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#84cc16", boxShadow: "0px 0px 15px rgba(132, 204, 22, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <FaNodeJs className="text-7xl text-lime-500" />
                </motion.div>
                <motion.div
                    variants={iconVariations(4)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#22c55e", boxShadow: "0px 0px 15px rgba(34, 197, 94, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <BiLogoMongodb className="text-7xl text-green-500" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technology;