import React from 'react'
import {FaMoon,FaSun} from 'react-icons/fa'

const Header = ({myTheme,onToggleTheme,onSwitch}) => {
  return (
    <header data-theme={myTheme} className='header '>
        <div className="container --flex-between">
            <div style={{width:"150px",height:"60px"}} className='logo --flex-center '>
                <img className='--w100' src="./assets/logo.png" alt="logoImg" />
            </div>
            <nav>
                <ul className='--flex-between --cg1 --text-md'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div onClick={onToggleTheme} className='toggle --text-sm'>
                <div className="icons">
                    <FaMoon/>
                    <FaSun/>
                </div>
                <div className={onSwitch?'ball move':"ball"}></div>
            </div>
        </div>

    </header>
  )
}

export default Header