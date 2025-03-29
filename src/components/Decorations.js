import React from 'react';

function Decorations() {
  return (
    <>
      <div className="decoration decoration-1">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="1" />
        </svg>
      </div>
      <div className="decoration decoration-2">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FF6B6B" />
        </svg>
      </div>
      <div className="decoration decoration-3">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z" fill="#4ECDC4" stroke="#4ECDC4" strokeWidth="1" />
        </svg>
      </div>
      <div className="decoration decoration-4">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 8.2L21 9.5L16.5 14L17.8 20.5L12 17.3L6.2 20.5L7.5 14L3 9.5L9.6 8.2L12 2Z" fill="#A29BFE" stroke="#A29BFE" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
}

export default Decorations;