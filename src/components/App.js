import React, { useState } from 'react';
import Upload from './Upload';

function App() {
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [images, setImages] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(files)
    alert('Данные отправлены в консоль');

    setFiles([]);
    setFileNames([]);
    setImages([]);
  }

  return (
    <form className="form">
      <h1 className="form__title">Перетащите картинки</h1>
      <Upload
        setFiles={setFiles}
        fileNames={fileNames}
        setFileNames={setFileNames}
        images={images}
        setImages={setImages}
      />
      <button className="form__submit-button" onClick={handleSubmit}>Отправить</button>
    </form>
  );
}

export default App;
