import React from 'react'

const Header = () => {
    return (
        <div className=" w-full flex justify-between items-center mb-10">
            <a  href = "/" className = "font-bold text-xl sm:text-4xl ">Rahul.</a>
            <div className = " flex w-50 w-48 justify-evenly sm:w-96 md:w-96">
                
                    <a  className = "hover:bg-gray-800 hover:text-white rounded-xl px-2 text-base sm:text-xl sm:hover:text-xl" href="/codingProfiles">About</a>
                    <a  className = "hover:bg-gray-800 hover:text-white rounded-xl px-2 text-base sm:text-xl sm:hover:text-xl" href="/projects">Projects</a>
                    <a  className = "hover:bg-gray-800 hover:text-white rounded-xl px-2 text-base sm:text-xl sm:hover:text-xl" href="/contact">Contact</a>
            </div>
        </div>
    )
}

export default Header
