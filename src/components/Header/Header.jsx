import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <header>
        <nav className={styles.nav}>
            <img src={logo} alt="music_logo" />
            <input type="search" value=""  placeholder='Search artists'/>
        </nav>
    </header>
  )
}

export default Header