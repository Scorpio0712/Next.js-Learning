import React from 'react'
import Image from "next/image";
import '../style/coral.css';

function CoralPage() {
    return (
        <div> <h1 className='coral-topic'>Coral component</h1>
            <div className="coral-gallery">
                <div className="coral-card">
                    <div className="image-wrapper">
                        <Image src='/images/pexels-jasper-hunter-692558448-17994861.jpg' alt='Beautiful coral reef' width={500} height={350} />
                        <div className="overlay"><p>Explore the reef</p></div>
                    </div>
                    <h3 className="coral-title">Beautiful Coral Reef</h3>
                </div>

                <div className="coral-card">
                    <div className="image-wrapper">
                        <Image src='/images/pexels-valeriya-34759410.jpg' alt='Beautiful coral reef' width={500} height={350} />
                        <div className="overlay"><p>Explore the reef</p></div>
                    </div>
                    <h3 className="coral-title">Marine Life</h3>
                </div>
            </div>
        </div>
    )
}

export default CoralPage