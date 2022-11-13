import React from 'react'
import Traffic from '../../images/traffic.png'

const Project4 = () => {
  return (
    <div className="project">
        <img src={Traffic} alt="traffic" />
        <div className="p-button">
            <a href="https://github.com/iosfullstack/traffic-light.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://traffic-light-zeta.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
  )
}

export default Project4