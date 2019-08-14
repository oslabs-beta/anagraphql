import React from 'react';

export default function Headline({ header, handleQuery, hasErrors }) {
  if (handleQuery) {
    return (
      <div id="sendQuery">
        <h2>{header}</h2>
        <div id="btn-container">
          <div id="options">
            <div>
              <input
                type="radio"
                id="server"
                name="drone"
                value="SERVER"
                checked
              />
              <label htmlFor="server">Server Rules</label>
            </div>
            <div>
              <input
                type="radio"
                id="client"
                name="drone"
                value="CLIENT"
                checked
              />
              <label htmlFor="client">Client Rules</label>
            </div>
            <div>
              <input
                type="radio"
                id="merge"
                name="drone"
                value="MERGE"
                checked
              />
              <label htmlFor="merge">Merge Rules</label>
            </div>
          </div>
          <button type="button" onClick={handleQuery} disabled={hasErrors} style={{ cursor: 'grab' }}>Send Query</button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2>{header}</h2>
    </div>
  );
}
