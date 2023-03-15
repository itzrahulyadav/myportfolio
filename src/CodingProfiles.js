import React from 'react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { GrGithub } from 'react-icons/gr';


const CodingProfiles = () => {
    return(
        <>
        <div className = "flex flex-col">
           <h1 className = "text-4xl font-bold">Education</h1>
           <div className = "bg-gradient-to-br from-slate-200 to-blue-300 via-cyan-100  rounded-xl flex flex-col mx-auto backdrop-blur-0 drop-shadow-xl my-5 w-full h-auto p-5">
             <h1 className = "text-2xl font-bold">Masters of Computer Applications</h1>
                    <a href="https://www.jecjabalpur.ac.in/" target="_blank" className = "text-xl">Jabalpur Engineering College</a>
           </div>

        </div>
        <h1 className = "text-4xl font-bold">Coding Profiles</h1>
        <div className= 'flex justify-around mx-auto bg-white/50 drop-shadow-xl shadow-xl rounded-xl p-5 backdrop-blur-lg my-5'>
                <a className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white  transition-color duration-300 text-center" href="https://leetcode.com/coolextkid/"  target="_blank">
                <SiLeetcode />
                
            </a>
                <a className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white  transition-color duration-300" href="https://auth.geeksforgeeks.org/user/rahulkyadav9691/profile" target="_blank">
                <SiGeeksforgeeks />
                
            </a>
                <a className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white  transition-color duration-300" href="https://github.com/itzrahulyadav" target="_blank">
                <GrGithub />
                
            </a>
       </div>
        </>
    )
}

export default CodingProfiles;