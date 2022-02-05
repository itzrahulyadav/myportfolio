import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiRedux, SiHtml5, SiPython, SiTypescript} from 'react-icons/si';


const Skills = () => {
    return (
        <div className="max-w-4xl mx-auto justify-center py-12 " id="tech">
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

        </div>
    )
}

export default Skills
