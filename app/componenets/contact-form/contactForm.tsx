'use client'
import React, { useState } from 'react'
import styles from './contactForm.module.css'

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(!formData.name || !formData.email || !formData.message) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน')
            return
        }

        console.log('Form Data:', formData)
        alert(`ส่งข้อความสำเร็จ!\n\nชื่อ: ${formData.name}\nอีเมล: ${formData.email}\nข้อความ: ${formData.message}`)

        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            

            <div className={styles.formGroup}>
                <label htmlFor="name">ชื่อ:</label>
                <input type="text" id="name" name="name" placeholder='กรอกชื่อ' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">
                    อีเมล:
                </label>
                <input type="email" id="email" name="email" placeholder="example@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">ข้อความ:</label>
                <textarea name="message" id="message" rows={5} placeholder='พิมพ์ขข้อความของคุณที่นี่...' value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            </div>

            <button type='submit' className={styles.submitBtn}>ส่งข้อความ</button>
        </form>
    )
}

export default ContactForm