import React from 'react'
import './Portfolio.css'
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import Project1 from '../Project/Project1'
import Project2 from '../Project/Project2'
import Project3 from '../Project/Project3'
import Project4 from '../Project/Project4'
import Project5 from '../Project/Project5'
import Project6 from '../Project/Project6'
import Project7 from '../Project/Project7'
import { ThemeContext } from '../../Context/Context'
import { useContext } from 'react'

const Portfolio = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const [show1, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show1)
  const reveals = () => setShow2(!show2)
  const reveal1 = () => setShow3(!show3)
  const reveal2 = () => setShow4(!show4)
  const reveal3 = () => setShow5(!show5)
  const reveal4 = () => setShow6(!show6)
  const reveal5 = () => setShow7(!show7)
  return (
    <div className='portfolios mt-28'>
      <span style={{color: darkMode ? 'white' : ''}}>My Projects</span>
    <div className="portfolio flex flex-row flex-wrap gap-5 justify-center items-center mt-10">
      
      <div className="projects flex flex-col gap-5 justify-center items-center" ref={parent}>
       <strong className="dropdown-label" onClick={reveal}>Amazon E-Commerce</strong>
        { show1 && <Project1/> }
    </div>
      <div className="projects flex flex-col gap-5 justify-center items-center" ref={parent}>
       <strong className="dropdown-label1" onClick={reveals}>Blockchain landing page</strong>
        { show2 && <Project2/> }
    </div>
      <div className="projects flex flex-col gap-5 justify-center items-center" ref={parent}>
       <strong className="dropdown-label" onClick={reveal1}>Todo List App</strong>
        { show3 && <Project3/> }
    </div>
    <div className="projects flex flex-col gap-5 justify-center items-center" ref={parent}>
       <strong className="dropdown-label1" onClick={reveal2}>Traffic Light</strong>
        { show4 && <Project4/> }
    </div>
    <div className="projects flex flex-col gap-5 justify-center items-center" ref={parent}>
       <strong className="dropdown-label" onClick={reveal3}>Authentication Biolerplate</strong>
        { show5 && <Project5/> }
    </div>
    <div className="projects flex flex-col gap-5 justify-center items-center" ref={parent}>
       <strong className="dropdown-label1" onClick={reveal4}>ScoreBoard</strong>
        { show6 && <Project6/> }
    </div>
    <div className="projects flex flex-col gap-5 justify-center items-center" ref={parent}>
       <strong className="dropdown-label" onClick={reveal5}>Stop Watch</strong>
        { show7 && <Project7/> }
    </div>
    </div>
    </div>
  )
}

export default Portfolio