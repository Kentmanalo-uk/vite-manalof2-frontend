import React from 'react';

// icons are React components from lucide-react
const Card = ({ Icon, title, description, ctaLabel = "Learn more", onCta }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {Icon ? <Icon size={36} /> : null}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <div className="card-cta">
        <button className="card-btn" onClick={onCta}>{ctaLabel}</button>
      </div>
    </div>
  );
}

export default Card;
