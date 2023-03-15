import React,{useEffect} from 'react'
//importing framer motion
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {useAnimation} from 'framer-motion';


const Contact = () => {
    const {ref,inView} = useInView({
    });
    const animation = useAnimation();

    useEffect(()=>{
        if(inView)
        {
            animation.start({
                x: 0,
                transition: {
                    type:'spring',duration:1,bounce:0.3
                }
            })
        }
        if(!inView)
        {
            animation.start({x:'40vw'})
        }
    },[inView]);
    return (
        <motion.div ref = {ref} className=" w-full flex flex-col items-center " 
        animate = {animation}>
            <p className='text-center text-bold text-4xl mb-4'>want to say hello</p>
            <a href="mailto: rahulkyadav9691@gmail.com" className='border-2 w-2/5 text-center bg-slate-900 text-white rounded-md py-2 sm:w-2/6 md:w-2/6 sm:py-4 sm:text-2xl hover:bg-gray-600 backdrop-blur-lg'>
                Get in touch
            </a>

        </motion.div>
    )
}

export default Contact
