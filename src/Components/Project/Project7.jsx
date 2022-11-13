import React from 'react'
import Stop from '../../images/stopwatch.png'

const Project7 = () => {
  return (
    <div className="project">
        <img src={Stop} alt="" />
        <div className="p-button">
            <a href="https://github.com/iosfullstack/IOS-stop-watch.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://ios-stop-watch.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
  )
}

export default Project7