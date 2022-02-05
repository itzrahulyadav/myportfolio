import React from 'react'

const Header = () => {
    return (
        <div className=" w-full flex justify-between items-center mb-10">
            <h1 className = "font-bold text-xl sm:text-4xl ">Rahul.</h1>
            <div className = " flex w-50 w-48 justify-evenly sm:w-96 md:w-96">
                
                    <a  className = "hover:text-pink-200 text-base sm:text-xl sm:hover:text-2xl" href="#">About</a>
                    <a  className = "hover:text-pink-200 text-base sm:text-xl sm:hover:text-2xl" href="#">Projects</a>
                    <a  className = "hover:text-pink-200 text-base sm:text-xl sm:hover:text-2xl" href="#contact">Contact</a>
                  


            
            </div>
        </div>
    )
}

export default Header
