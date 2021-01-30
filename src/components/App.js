import React, { useState } from 'react';
import Upload from './Upload';

function App() {
  const [files, setFiles] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(files);
  }

  return (
    <form className="form">
      <h1 className="form__title">Перетащите картинки</h1>
      <Upload setFiles={setFiles} />
      <button className="form__submit-button" onClick={handleSubmit}>Отправить</button>
    </form>
  );
}

export default App;
