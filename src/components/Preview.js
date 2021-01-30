import React from 'react';

function Preview(props) {
  return (
    <img className="preview" alt='preview' src={props.src} />
  );
}

export default Preview;
