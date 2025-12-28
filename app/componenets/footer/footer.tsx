import React from 'react'
import styles from './footer.module.css'

function FooterPage() {

    const currentDate = new Date().getFullYear();

  return (
    <footer className={styles.footerMain}>
        <p className={styles.footerDetail}>&copy; {currentDate}, My website</p>
    </footer>
  )
}

export default FooterPage