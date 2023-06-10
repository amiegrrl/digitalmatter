import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const handleLinkClick = ({ target }) => {
    if (target.closest('a')) toggleMenu()
  }

  return (
    <div className='header'>
      <div className={`header__menu ${isActive ? 'is-visible' : ''}`}>
        <ul onClick={handleLinkClick}>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#approach'>Approach</a></li>
          <li><a href='#clients'>Clients</a></li>
          <li><a href='#contact'>Contact</a></li>
          {/* <li><a href='#login'>Login</a></li> */}
        </ul>
      </div>

      <h1 className='logo'>
        <Link href='/'>
          <a><img src='/DM_LOGO_FULL_COLOR.png' alt='Digital Matter logo full' /></a>
        </Link>
      </h1>

      <button className='header__burger' onClick={toggleMenu}>
        <div className={isActive ? 'close' : ''} />
      </button>
    </div>
  )
}

export default Header
