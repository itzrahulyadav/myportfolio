import React from 'react'
import { GrGithub, GrTwitter, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { BsTwitch} from 'react-icons/bs'


const Links = () => {
    return (
        <div className="flex align-center justify-center mt-4 rahul">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white  transition-color duration-300" href="https://github.com/itzrahulyadav" target = "_blank">
                <GrGithub />
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-400 hover:bg-gray-800 rounded-full hover:text-white transition-color duration-300" href="https://twitter.com/Itzrahulyadav_" target = "_blank">
                <GrTwitter />
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2  hover:bg-gray-800 rounded-full hover:text-white transition-color duration-300" href="https://instagram.com/itzrahulyadav" target = "_blank">
                <GrInstagram color = "hotpink" />
            </a>

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-gray-800 rounded-full hover:text-white transition-color duration-300"  target ="_blank" href="https://www.linkedin.com/in/rahul-yadav-2a4b3b199/">
                <GrLinkedin />
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-gray-800 rounded-full hover:text-white transition-color duration-300" href="https://www.twitch.tv/itzrahulyadav" target = "_blank">
                <BsTwitch color = "purple" />
            </a>
            


        </div>
    )
}

export default Links
