import React from 'react';

const PrimaryButton = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="primary-btn"
    >
      {label}
    </button>
  )
}

export default PrimaryButton;
