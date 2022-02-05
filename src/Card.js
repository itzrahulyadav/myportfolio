import React from 'react'
import rahul from './rahul.jpg'
import Links from './Links'

const Card = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center mx-auto bg-white/50 drop-shadow-xl shadow-xl rounded-xl p-5 backdrop-blur-lg">
                <div>
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm hover:scale-75 hover:rotate-6 transition-transform -rotate-6" alt="profile photo" src={rahul} />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-black font-bold">Rahul Yadav</p>
                    <p className="text-xs sm:text-base text-black pt-2 pb-4 px-5 m-auto inline-block ">React Developer</p>
                </div>

                <Links />

            </div>
        </div>
    )
}

export default Card
