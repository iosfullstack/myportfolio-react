import React from 'react'
import Blockchain from '../../images/blockchain.png'

const Project2 = () => {
  return (
    <div className="project">
        <img src={Blockchain} alt="" />
        <div className="p-button">
            <a href="https://github.com/iosfullstack/Blockchain-Infusion.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://blockchain-infusion-zhl7.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
  )
}

export default Project2