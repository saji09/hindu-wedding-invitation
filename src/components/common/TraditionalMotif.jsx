import React from 'react'

const TraditionalMotif = ({ type = 'kolam', size = 'md' }) => {
  const sizes = {
    sm: '30px',
    md: '50px',
    lg: '80px'
  }
  
  const motifs = {
    kolam: (
      <svg width={sizes[size]} height={sizes[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="var(--primary-color)"/>
        <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="var(--secondary-color)"/>
        <circle cx="12" cy="12" r="2" fill="var(--accent-color)"/>
      </svg>
    ),
    mango: (
      <svg width={sizes[size]} height={sizes[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="var(--accent-color)"/>
        <path d="M12 6L8 12L12 18L16 12L12 6Z" fill="var(--primary-color)"/>
      </svg>
    ),
    peacock: (
      <svg width={sizes[size]} height={sizes[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="var(--secondary-color)"/>
        <path d="M12 6L16 12L12 18L8 12L12 6Z" fill="var(--primary-color)"/>
        <circle cx="12" cy="12" r="2" fill="var(--light-color)"/>
      </svg>
    )
  }
  
  return motifs[type] || motifs.kolam
}

export default TraditionalMotif