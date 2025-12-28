
import React from 'react';
import styles from './button.module.css'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', fullWidth = false, onClick }: ButtonProps) {

  const buttonClasses = `${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`.trim();

  return (
    <button className={buttonClasses} onClick={onClick}>{children}</button>
  )
}

