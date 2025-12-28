'use client'
import React from 'react'
import Image from 'next/image'
import '../style/product-page.css'
import Button from '../componenets/button/button'
import Card from '../componenets/card/card'

function ProductPage() {
    return (
        <div className='product-main'>
            <section className='hero'>
                <div className="hero-content">
                    <h1 className="hero-title">Our Products</h1>
                    <p className="hero-subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, fuga?</p>
                </div>
            </section><br />
            <p className='product-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit tempore itaque repellat, earum ratione quis est consequuntur,
                sequi doloribus nisi cumque eveniet, voluptatem consectetur debitis ducimus nulla.
                Repellat velit quibusdam impedit consectetur accusamus ad sed. Veritatis officia corrupti ad ipsum neque corporis in aut maxime? Animi, corrupti quo? Ut.</p>

            <Image src='/images/pexels-jasper-hunter-692558448-17994861.jpg'
                alt='Product 1' width={800} height={600}
                sizes='(max-width: 768px) 100vw, 50vw'
                style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
                priority />

            <Image src='/images/pexels-valeriya-34759410.jpg' alt='Product 2' width={300} height={600} sizes='(max-width: 768px) 100vw, 50vw' style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
            <div className="cards-container">
                <Card image='/images/pexels-valeriya-34759410.jpg' title='Premium Product 2' description='สินค้าคุณภาพ' price='฿1,499' />
                <Card image='/images/pexels-valeriya-34759410.jpg' title='Premium Product 2' description='สินค้าคุณภาพ' price='฿1,499' />
                <Card image='/images/pexels-valeriya-34759410.jpg' title='Premium Product 2' description='สินค้าคุณภาพ' price='฿1,499' />
            </div>


            <Button variant="primary" onClick={() => alert('Clicked!')}>Submit</Button>
            <Button variant="secondary" onClick={() => alert('Cancelled!')}>Cancel</Button>
        </div>
    )
}

export default ProductPage