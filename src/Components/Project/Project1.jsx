import React from 'react'
import Amazon from '../../images/amazon.png'

const Project1 = () => {
  return (
    <div className="project">
        <img src={Amazon} alt="" />
        <div className="p-button">
            <a href="https://github.com/iosfullstack/e-commerce.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://e-commerce-gray-psi.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
  )
}

export default Project1