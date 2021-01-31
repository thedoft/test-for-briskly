import React from 'react';
import Preview from './Preview';

function Upload(props) {
  const { setFiles, fileNames, setFileNames, images, setImages } = props;

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
    const filteredFiles = uploadedFiles
      .filter((file) => file.type.startsWith('image/') && !fileNames.includes(file.name));

    filteredFiles.forEach(previewFile);
  }

  function previewFile(file) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = { src: reader.result };

      setFileNames(fileNames => [...fileNames, file.name]);
      setImages(images => [...images, img]);
      setFiles(files => [...files, reader.result]);
    }
  }

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
