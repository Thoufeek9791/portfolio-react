import { CONTACT } from "../constants";
import {motion} from 'motion/react'

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            whileInView={{opacity: 1, y: 0}}
             className="my-10 text-center text-4xl">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
                className="my-4">{CONTACT.address}</motion.p>
                <motion.p 
                initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
                className="my-4">{CONTACT.phoneNo}</motion.p>
                <a href="#" className="border-b ">thoufeekrahuman9361@gmail.com</a>
            </div>
        </div>
    );
}

export default Contact;