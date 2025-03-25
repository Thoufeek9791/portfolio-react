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
            initial={{opacity: 0,y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
             className="my-20 text-center text-4xl">Tools</motion.h2>
            <motion.div 
            initial={{opacity: 0,x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
             className="flex flex-wrap items-center justify-center gap-4">
                
                    <motion.div 
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <img src={viteIcon} alt="vite icon" width={60} height={60} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariations(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <img src={webpackIcon} alt="vite icon" width={60} height={60} />
                    </motion.div>

                     <motion.div 
                    variants={iconVariations(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <img src={eslintIcon} alt="vite icon" width={60} height={60} />
                    </motion.div>

                     <motion.div 
                    variants={iconVariations(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <img src={prettierIcon} alt="vite icon" width={60} height={60} />
                    </motion.div>

                    <motion.div 
                    variants={iconVariations(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <img src={babelIcon} alt="vite icon" width={60} height={60} />
                    </motion.div>
                    
                    <motion.div 
                    variants={iconVariations(6)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <img src={gitIcon} alt="vite icon" width={60} height={60} />
                    </motion.div>
                    
                
                <motion.div 
                    variants={iconVariations(4)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <img src={npmIcon} alt="vite icon" width={60} height={60} />
                    </motion.div>
                    
            </motion.div>
        </div>
    );
}

export default Tools;