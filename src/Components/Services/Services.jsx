import React from 'react'
import './Services.css'
import Html from '../../images/html.png'
import Css from '../../images/css.png'
import Js from '../../images/js.png'
import Reacts from '../../images/react.png'
import Nodejs from '../../images/nodejs.png'
import Git from '../../images/git.png'
import Sql from '../../images/Sql.png'
import Tailwind from '../../images/tailwind.png'
import Bootstrap from '../../images/bootstrap.png'
import {motion} from 'framer-motion'
import Humble from '../../images/humble.png'
import {FaLaptopCode} from 'react-icons/fa'
import { ThemeContext } from '../../Context/Context'
import { useContext } from 'react'
import { Link } from "react-scroll";

const Services = () => {
    const spinTransition = {
        rotate: {
            loop: Infinity,
            ease: "linear",
            duration: 3
        },
        scale: {
            duration: 10
        }
    };

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    
  return (
    <div id='about' className="about flex flex-row justify-center  mt-24">
        <div className="intro relative flex flex-1 flex-col justify-center gap-7">
            <div className="about-me flex items-center">
                <span style={{color: darkMode ? 'white' : ''}}>Me,</span>
                <span> Myself &,</span>
                <span style={{color: darkMode ? 'white' : ''}} >I</span>
                <img src={Humble} alt="" />
            </div>
            <p className='block font-semibold text-start text-sm w-96'>
                Hello again! Thanks for scrolling this far!!😊 
                I'm a Frontend Web Developer building the Front-end of Websites 
                that leads to the success of the overall product. 
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and 
                experience then don't hesitate to contact me.
            </p>
            <Link to='contact' smooth={true} spy={true}>
                <a className='special block text-blue-600 hover:text-amber-500 w-52' href="#contact">Let's make something special.</a>
            </Link>
        </div>
        <div className="tech relative flex flex-col gap-7">
            <span style={{color: darkMode ? 'white' : ''}} className='tools flex items-center gap-4'>
                My Toolkits
                <FaLaptopCode className='text-3xl text-amber-500'/>
            </span>
            <div 
            className="toolkits flex gap-6 flex-wrap w-96">
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Html} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Css} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Js} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Bootstrap} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Tailwind} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Reacts} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Nodejs} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Git} alt="" />
                <motion.img
                animate={{ rotate: 360 }}
                transition={spinTransition}
                 src={Sql} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Services