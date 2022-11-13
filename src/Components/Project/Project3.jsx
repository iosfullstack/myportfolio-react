import React from 'react'
import Todo from '../../images/Todo.png'

const Project3 = () => {
  return (
    <div className="project">
        <img src={Todo} alt="" />
        <div className="p-button">
            <a href="https://github.com/iosfullstack/To-Do-List.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://to-do-list-weld-omega.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
  )
}

export default Project3