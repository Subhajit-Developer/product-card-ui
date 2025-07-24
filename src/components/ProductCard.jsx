import React from 'react';

export default function ProductCard({ product }) {
  const { name, image, price, variants, available } = product;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-body">
        <h2>{name}</h2>
        <p>${price.toFixed(2)}</p>

        <select disabled={!available}>
          {variants.map((variant) => (
            <option key={variant} value={variant}>{variant}</option>
          ))}
        </select>

        <button disabled={!available}>
          {available ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
