import React from 'react'
import styles from './hero.module.css'

function Hero() {
    return (
        <div>
            <section className={styles.hero}>
                <div className={styles['hero-content']}>
                    <h1 className={styles['hero-title']}>Our Products</h1>
                    <p className={styles['hero-subtitle']}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, fuga?</p>
                </div>
            </section>
        </div>
    )
}

export default Hero