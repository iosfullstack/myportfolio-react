import React from 'react'
import Score from '../../images/score.png'

const Project6 = () => {
  return (
    <div className="project">
        <img src={Score} alt="score" />
        <div className="p-button">
            <a href="https://github.com/iosfullstack/ScoreBoard.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://score-board-iota.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
  )
}

export default Project6