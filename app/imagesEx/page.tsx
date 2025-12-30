import React from 'react'
import Image from 'next/image'
import '../style/imagesEx.css'

function ImagesExamplePage() {
  return (
    <div className='imagesEx-container'>
        <h1 className='imagesEx-head-topic'>Images Example Page</h1>

        <Image src='/images/pexels-jasper-hunter-692558448-17994861.jpg'
                alt='Product 1' width={800} height={600}
                sizes='(max-width: 768px) 100vw, 50vw'
                style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
                priority />

            <Image src='/images/pexels-valeriya-34759410.jpg' alt='Product 2' width={300} height={600} sizes='(max-width: 768px) 100vw, 50vw' style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
            
    </div>
  )
}

export default ImagesExamplePage