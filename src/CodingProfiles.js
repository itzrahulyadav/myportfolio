import React from 'react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { GrGithub } from 'react-icons/gr';

const CodingProfiles = () => {
    return(
        <div className= 'flex justify-around mx-auto bg-white/50 drop-shadow-xl shadow-xl rounded-xl p-5 backdrop-blur-lg my-5'>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white  transition-color duration-300" href="https://leetcode.com/itzrahulyadav/">
                <SiLeetcode />
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white  transition-color duration-300" href="https://auth.geeksforgeeks.org/user/rahulkyadav9691/profile">
                <SiGeeksforgeeks />
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white  transition-color duration-300" href="https://github.com/itzrahulyadav">
                <GrGithub />
            </a>
       </div>
    )
}

export default CodingProfiles;