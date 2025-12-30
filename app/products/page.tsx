'use client'
import React from 'react'
import Image from 'next/image'
import '../style/product-page.css'
import Button from '../componenets/button/button'
import Card from '../componenets/card/card'

function ProductPage() {
    return (
        <div className='product-main'>
            <br />
            <p className='product-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit tempore itaque repellat, earum ratione quis est consequuntur,
                sequi doloribus nisi cumque eveniet, voluptatem consectetur debitis ducimus nulla.
                Repellat velit quibusdam impedit consectetur accusamus ad sed. Veritatis officia corrupti ad ipsum neque corporis in aut maxime? Animi, corrupti quo? Ut.</p>

          


            <Button variant="primary" onClick={() => alert('Clicked!')}>Submit</Button>
            <Button variant="secondary" onClick={() => alert('Cancelled!')}>Cancel</Button>
        </div>
    )
}

export default ProductPage