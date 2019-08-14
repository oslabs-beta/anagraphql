import React from 'react';

export default function Headline(props) {
  const { header } = props;
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
}
