import {motion} from 'motion/react'
import viteIcon from '../assets/tools/vite-icon.svg';
import webpackIcon from '../assets/tools/webpack.svg';
import eslintIcon from '../assets/tools/eslint.svg';
import prettierIcon from '../assets/tools/prettier.svg';
import babelIcon from '../assets/tools/babel.svg';
import gitIcon from '../assets/tools/git.svg';
import npmIcon from '../assets/tools/npm.svg';


const Tools = () => {

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
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Tools
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div 
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#a78bfa", boxShadow: "0px 0px 15px rgba(167, 139, 250, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <img src={viteIcon} alt="vite icon" width={70} height={70} />
                </motion.div>

                <motion.div 
                    variants={iconVariations(3)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#60a5fa", boxShadow: "0px 0px 15px rgba(96, 165, 250, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <img src={webpackIcon} alt="webpack icon" width={70} height={70} />
                </motion.div>

                <motion.div 
                    variants={iconVariations(5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#a78bfa", boxShadow: "0px 0px 15px rgba(167, 139, 250, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <img src={eslintIcon} alt="eslint icon" width={70} height={70} />
                </motion.div>

                <motion.div 
                    variants={iconVariations(2)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#f472b6", boxShadow: "0px 0px 15px rgba(244, 114, 182, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <img src={prettierIcon} alt="prettier icon" width={70} height={70} />
                </motion.div>

                <motion.div 
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#fbbf24", boxShadow: "0px 0px 15px rgba(251, 191, 36, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <img src={babelIcon} alt="babel icon" width={70} height={70} />
                </motion.div>
                
                <motion.div 
                    variants={iconVariations(6)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#f97316", boxShadow: "0px 0px 15px rgba(249, 115, 22, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <img src={gitIcon} alt="git icon" width={70} height={70} />
                </motion.div>
                
                <motion.div 
                    variants={iconVariations(4)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.1, borderColor: "#ef4444", boxShadow: "0px 0px 15px rgba(239, 68, 68, 0.5)" }}
                    className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors"
                >
                    <img src={npmIcon} alt="npm icon" width={70} height={70} />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Tools;