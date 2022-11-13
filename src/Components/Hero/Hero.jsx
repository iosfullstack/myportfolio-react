import React from 'react'
import './Hero.css'
import Github from '../../images/github.png'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'
import Linkldn from '../../images/linkedin.png'
import IOS from '../../images/IOS-img-removebg-preview.png'
import Cool from '../../images/glassesimoji.png'
import {motion} from 'framer-motion'
import {ImDownload} from 'react-icons/im'
import { ThemeContext } from '../../Context/Context'
import { useContext } from 'react'
import { Link } from "react-scroll";


const Hero = () => {
    const transition = {duration: 3, type: "spring"}
    const bounceTransition = { y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeOut",
        // repeatDelay: 1.2,
      }
    }

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
  return (
    <div id='home' className="hero flex flex-row justify-center items-center mt-24">
        <div className="h-left relative flex flex-1 flex-col gap-7">
            <div className="h-name flex flex-col">
                <span style={{color: darkMode ? 'white' : ''}}>Hi! My name is</span>
                <span>Samson Isadare</span>
                <span style={{color: darkMode ? 'white' : ''}} className='block font-semibold'>
                    Frontend Developer with high level 
                    of experience in web development, 
                    producing the quality work.
                </span>
            </div>
            <Link to='contact' smooth={true} spy={true}>
                <a href='#contact' className="nav-btn hero-btn w-28 h-9 text-center">Hire Me 👍 </a>
            </Link>

            <div className="hero-icons flex gap-0 mt-12">
                <a href="https://github.com/iosfullstack"><img src={Github} alt="github" /></a>
                <a href="https://www.instagram.com/iosdev.me/"><img src={Instagram} alt="instagram" /></a>
                <a href="https://www.linkedin.com/in/samson-isadare-1024a7243"><img src={Linkldn} alt="linkdln" /></a>
                <a className='text-xl w-20' href="https://twitter.com/ios_py/"><img src={Twitter} alt="twitter" /></a>
            </div>
        </div>

        <div className="h-right flex-1 mt-0">
        <div className="hero-img-wrapper flex justify-center items-baseline">
            <motion.div
            initial={{bottom: "-32px"}}
            whileInView={{bottom: "0px"}}
            transition={bounceTransition}
            animate={{
                y: ["5%", "-5%"],
            }}
            className="img-bluecircle">
            </motion.div>

            <motion.img 
            initial={{bottom: "32px"}}
            whileInView={{bottom: "0px"}}
            transition={transition} 
            src={IOS} alt="heroimg" width={500} className='profile-img' />

            <motion.div
            initial={{right: "4%"}}
            whileInView={{right: "2%"}}
            transition={transition} 
            className="hero-cart absolute flex items-center bottom-1/4 right-px gap-4">
            <div className="hero-dwnld flex gap-4 items-center bg-white text-sm p-3 rounded-2xl shadow-black">
                <a className='flex gap-2' href="http://">
                    Download CV
                    <ImDownload/>
                </a>
                
            </div>
            </motion.div>
        </div>
        <motion.img
         initial={{bottom: "-32px"}}
         whileInView={{bottom: "0px"}}
         transition={bounceTransition}
         animate={{
             y: ["5%", "-5%"],
         }}
         className='emoji' src={Cool} alt="emoji" />
        </div>
    </div>
  )
}

export default Hero