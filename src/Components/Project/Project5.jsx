import React from 'react'
import Auth from '../../images/auth.png'

const Project5 = () => {
  return (
    <div className="project">
        <img src={Auth} alt="auth" />
        <div className="p-button">
            <a href="https://github.com/iosfullstack/Auth-Auth-Boilerplate.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://auth-auth-boilerplate.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
  )
}

export default Project5