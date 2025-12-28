import React from 'react'
import Image from 'next/image'
import styles from './card.module.css'

interface CardProps {
    image: string;
    title: string;
    description: string;
    price?: string;
}

function Card({ image, title, description, price }: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    sizes='(max-width: 768px) 100vw, 50vw'
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {price && <p className={styles.price}>{price}</p>}
            </div>
        </div>
    )
}

export default Card