import React, { useState } from 'react';
import Preview from './Preview';

function Upload(props) {
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [images, setImages] = useState([]);

  function preventDefaults(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  function toggleElementClass(evt) {
    evt.currentTarget.classList.toggle('upload_highlight');
  }

  function handleDragEnter(evt) {
    preventDefaults(evt);
    toggleElementClass(evt);
  }

  function handleDragLeave(evt) {
    preventDefaults(evt);
    toggleElementClass(evt);
  }

  function handleDragOver(evt) {
    preventDefaults(evt);
  }

  function handleDrop(evt) {
    preventDefaults(evt);
    toggleElementClass(evt);

    const uploadedFiles = [...evt.dataTransfer.files];
    const filteredByTypeFiles = uploadedFiles.filter((file) => file.type.startsWith('image/'));

    setFiles([...files, ...filteredByTypeFiles]);
  }

  React.useEffect(() => {
    function previewFile(file) {
      if (file) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const img = { src: reader.result };

          setImages(images => [...images, img]);
          setFileNames([...fileNames, file.name]);
        }
      }
      return;
    }

    const filteredFiles = files.filter((file) => !fileNames.includes(file.name));

    filteredFiles.forEach(previewFile);
  }, [files, fileNames]);

  return (
    <div className="upload"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="upload__gallery">
        {images.map((image, index) => (
          <Preview key={index} src={image.src} />
        ))}
      </div>
    </div>
  );
}

export default Upload;
