import React from 'react'
import Links from './Links'; 

 const Footer = () => {
    return(
        <div className = "py-5" id = "contact">
          <Links />
          <div className = "flex justify-center mt-5 ">
                <p className = "font-medium text-xl">Made with by ❤️  Rahul Yadav</p>
          </div>
        </div>
        
    )
}

export default Footer