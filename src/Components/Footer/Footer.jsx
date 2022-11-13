import React from 'react'
import './Footer.css'
import Wave from '../../images/wave.png'
import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className="footer relative mt-28 flex items-center -my-2 -mx-14">
        <img className='w-full' src={Wave} alt="wave" />
        <div className="f-content w-full mt-16 absolute flex flex-col gap-4 items-center justify-center">
            <span className='text-white text-2xl'>Isadare001@gmail.com</span>
            <div className="f-icons flex gap-7">
                <a href="https://www.instagram.com/iosdev.me/"><FaInstagram className='text-white text-5xl'/></a>
                <a href="https://www.linkedin.com/in/samson-isadare-1024a7243"><FaLinkedin className='text-white text-5xl'/></a>
                <a href="https://github.com/iosfullstack"><FaGithub className='text-5xl text-white'/></a>
                <a href="https://twitter.com/ios_py/"><FaTwitter className='text-5xl text-white'/></a>
            </div>
        <span className='text-white'>© Samson Isadare 2022</span>
        <Link to='navbar' activeClass="active" smooth={true} spy={true}>
          <FaArrowUp className='arrow-up absolute right-0 -bottom-20 mr-8 text-white text-3xl cursor-pointer'/>
        </Link>
        </div>
    </div>
  )
}

export default Footer