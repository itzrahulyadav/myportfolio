import React,{useEffect} from 'react'
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiRedux, SiHtml5, SiPython, SiTypescript} from 'react-icons/si';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion';



const Skills = () => {
   
    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3,opacity:1
                }
            })
        }
        if (!inView) {
            animation.start({ x: '-20vw',opacity:1 })
        }
    }, [inView]);




    return (
        <motion.div ref = {ref} className="max-w-4xl mx-auto justify-center py-12 " id="tech" animate = {animation}>
            <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Tech I use
            </p>
            <div className="flex flex-wrap justify-center pt-2 ">
                <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-xl rounded">
                    <FaReact color="#2196f3" className="mx-auto text-4xl" />
                    <p className = "mx-auto text-xl sm:text-2xl font-semibold text-center">React Js</p>
                </div>
                <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-4xl rounded">
                    <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
                    <p className="mx-auto text-xl sm:text-2xl font-semibold text-center">Javascript</p>
                </div>
                <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-4xl rounded">
                    <SiTailwindcss color="#2196f3" className="mx-auto text-4xl" />
                    <p className="mx-auto text-xl sm:text-2xl font-semibold text-center">Tailwind</p>
                </div>
                <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-4xl rounded">
                    <SiTypescript color="blue" className="mx-auto text-4xl" />
                    <p className="mx-auto text-xl sm:text-2xl font-semibold text-center">Typescript</p>
                </div>
                <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-4xl rounded">
                    <SiHtml5 color="orange" className="mx-auto text-4xl" />
                    <p className="mx-auto text-xl sm:text-2xl font-semibold text-center">Html5</p>
                </div>
                <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-4xl rounded">
                    <SiRedux color="#2196f3" className="mx-auto text-4xl" />
                    <p className="mx-auto text-xl sm:text-2xl font-semibold text-center">Redux</p>
                </div>
                <div className="flex flex-col w-50 p-10 m-6 overflow-hidden bg-white shadow-4xl rounded">
                    <SiPython color="gold" className="mx-auto text-4xl" />
                    <p className="mx-auto text-xl sm:text-2xl font-semibold text-center">Python</p>
                </div>

            </div>

        </motion.div>
    )
}

export default Skills
