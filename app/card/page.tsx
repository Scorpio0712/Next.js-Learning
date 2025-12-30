import React from 'react'
import Card from '../componenets/card/card'
import '../style/card.css'

function CardPage() {
    return (
        <div className='card-container'>
            <h1 className="card-head-topic">Card Page</h1>
            <div className="cards-content">
                <Card image='/images/pexels-valeriya-34759410.jpg' title='Premium Product 2' description='สินค้าคุณภาพ' price='฿1,499' />
                <Card image='/images/pexels-valeriya-34759410.jpg' title='Premium Product 2' description='สินค้าคุณภาพ' price='฿1,499' />
                <Card image='/images/pexels-valeriya-34759410.jpg' title='Premium Product 2' description='สินค้าคุณภาพ' price='฿1,499' />
            </div>
        </div>
    )
}

export default CardPage