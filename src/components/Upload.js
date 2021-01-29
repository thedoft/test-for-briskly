import React from 'react';

function Upload() {
  function preventDefaults(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  function toggleElementClass(evt) {
    evt.target.classList.toggle('upload_highlight');
  }

  function handleDragEnter(evt) {
    preventDefaults(evt);
    toggleElementClass(evt);
  }

  function handleDragLeave(evt) {
    preventDefaults(evt);
    toggleElementClass(evt);
  }

  function handleDrop(evt) {
    preventDefaults(evt);
    toggleElementClass(evt);
  }

  return (
    <div className="upload"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    />
  );
}

export default Upload;
