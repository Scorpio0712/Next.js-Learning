'use client'
import React from 'react'
import FacebookButton from '../componenets/social-button/facebookButton'
import Button from '../componenets/button/button'
import '../style/button.css'


function ButtonPage() {
    return (
        <div className='button-page-container'>
            <h1 className='button-head-topic'>Button Page</h1>
            <h2 className='submit-cancel-topic'>Submit and Cancel Buttons</h2>
            <Button variant="primary" onClick={() => alert('Clicked!')}>Submit</Button>
            <Button variant="secondary" onClick={() => alert('Cancelled!')}>Cancel</Button>
            <h2 className='social-topic'>Social Buttons</h2>
            <FacebookButton pageUrl='https://www.facebook.com/Gun.Scorpio' />
        </div>
    )
}

export default ButtonPage