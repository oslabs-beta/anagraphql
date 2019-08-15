import React, { useState } from 'react';

export default ({ rules, text }) => {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);
  return (
    <div>
      <button type="button" className={`collapsible${active ? ' active' : ''}`} onClick={toggle}>{text}</button>
      <div className="content" style={{ maxHeight: active ? 'inherit' : null }}>
        {rules}
      </div>
    </div>
  );
};
