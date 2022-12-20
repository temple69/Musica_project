import React from 'react'
import styles from './layout.module.css'

const Layout = ({children}) => {
  return (
    <main>
            {children}
    </main>
  )
}

export default Layout