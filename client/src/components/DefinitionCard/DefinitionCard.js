import React from 'react';

export const DefinitionCard = (defTableId) => (
  <div className='definitionCard' id={defTableId}>
    <h2>{term}</h2>
    <p>{definition}</p>
  </div>
);
