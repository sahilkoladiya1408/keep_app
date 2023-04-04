import React from 'react'
import logo from "../Images/keep_logo.png"

const Header = () => {
  return (
    <>
        <div className='header'>
            <img src={logo} alt='keep_app_logo' />
            <h1>Keep App</h1>
        </div>
    </>
  )
}

export default Header
