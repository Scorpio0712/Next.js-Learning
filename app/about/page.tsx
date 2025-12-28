import React from 'react'
import '../style/about.css'
import FacebookButton from '../componenets/social-button/facebookButton'
import ContactForm from '../componenets/contact-form/contactForm'

function AboutPage() {
    return (
        <div className='about-page'>
            <h1 className='about-topic'>About Us</h1>
            <p className='about-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Autem delectus id consequuntur temporibus perspiciatis aspernatur enim, voluptas perferendis eaque dignissimos.
            </p>
            <h2 className='contact-topic'>Contact:</h2>
            <FacebookButton pageUrl='https://www.facebook.com/Gun.Scorpio' />
            <ContactForm />
        </div>
    )
}

export default AboutPage