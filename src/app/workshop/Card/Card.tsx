// app/components/Card.tsx
import React from 'react';
import styles from './Card.module.css';

type CardProps = {
  image: string;
  heading: string;
  description: string;
  price: string;
  date: string;
};

const Card: React.FC<CardProps> = ({ image, heading, description, price, date }) => {
  return (
    <div className={styles.cardContainer}> {/* Wrap card with cardContainer */}
      <div className={styles.card}>
        <img src={image} alt={heading} className={styles.image} />
        <h3 className={styles.h3}>{heading}</h3>
        <p className={styles.p}>{description}</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.date}>{date}</p>
        <button className={styles.buyButton}>Register ﹥</button>
      </div>
    </div>
  );
};

export default Card;
