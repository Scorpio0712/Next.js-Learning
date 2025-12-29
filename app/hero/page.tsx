import React from 'react'
import Hero from '../componenets/hero/hero'
import '../style/hero.css'

function HeroPage() {
    return (
        <div className='hero-container'><h1>Hero Component</h1>
            <Hero />
        </div>
    )
}

export default HeroPage