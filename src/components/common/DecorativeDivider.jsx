import React from 'react'

const DecorativeDivider = ({ type = 'lamp' }) => {
  return (
    <div className="text-center my-5">
      {type === 'lamp' ? (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21Z" fill="var(--primary-color)"/>
          <path d="M12 3C14.21 3 16 4.79 16 7C16 9.21 14.21 11 12 11C9.79 11 8 9.21 8 7C8 4.79 9.79 3 12 3Z" fill="var(--secondary-color)"/>
        </svg>
      ) : (
        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10 C20 30, 80 -10, 100 10" stroke="var(--primary-color)" strokeWidth="2" fill="none"/>
          <path d="M0 10 Q50 20, 100 10" stroke="var(--secondary-color)" strokeWidth="1" fill="none" strokeDasharray="5,5"/>
        </svg>
      )}
    </div>
  )
}

export default DecorativeDivider