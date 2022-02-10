import React from 'react'
import rahul from './rahul2.jpg'
import Links from './Links'
import {motion} from 'framer-motion';

const Card = () => {
    return (
        <motion.div className="w-full"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>
            <div className="flex flex-col justify-center mx-auto bg-white/50 drop-shadow-xl shadow-xl rounded-xl p-5 backdrop-blur-lg">
                <div>
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm hover:scale-75 hover:rotate-6 transition-transform -rotate-6" alt="profile photo" src={rahul} />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-black font-bold">Rahul Yadav</p>
                    <p className="text-xs sm:text-base text-black pt-2 pb-4 px-5 m-auto inline-block ">Full stack Developer</p>
                </div>

                <Links />

            </div>
        </motion.div>
    )
}

export default Card
