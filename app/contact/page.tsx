import React from 'react'
import '../style/contact.css'
import ContactForm from '../componenets/contact-form/contactForm'

function ContactFormPage() {
  return (
    <div className='contact-form-container'>
        <h1 className='contact-form-topic'>Contact Form Page</h1>
        <ContactForm />
    </div>
  )
}

export default ContactFormPage