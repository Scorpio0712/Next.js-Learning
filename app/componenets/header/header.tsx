'use client'
import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'

function HeaderPage() {
  
  return (
    <header className={styles.headerMain}>
      <nav className={styles.headerNav}>
        <span className={styles.headerTopic}>My website</span>
        <ul className={styles.navList}>
          <li><Link href={'../'}>Home</Link></li>
          <li><Link href={'../products/'}>Product</Link></li>
          <li><Link href={'../about/'}>About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderPage