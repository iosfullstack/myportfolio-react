import React from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { ThemeContext } from '../../Context/Context'
import { useContext } from 'react'

const Toggle = () => {
    
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }
  return (
    <div  onClick={handleClick} className="toggle relative flex justify-between cursor-pointer">
        <Sun/>
        <Moon/>
        <div className="t-button" style={darkMode ? {left: '2px'} : {right: '2px'}}>
            
        </div>
    </div>
  )
}

export default Toggle