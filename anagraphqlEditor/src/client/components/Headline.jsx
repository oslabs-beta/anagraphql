import React from 'react';
import PolicySelector from './PolicySelector';

export default function Headline({ header }) {
  if (header === 'Policies') {
    return (
      <div id="policy-options">
        <h2>{header}</h2>
        <PolicySelector />
      </div>
    );
  }
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
}
