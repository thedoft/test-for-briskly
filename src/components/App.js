import React from 'react';
import Upload from './Upload';

function App() {
  function handleSubmit(evt) {
    evt.preventDefault();

    console.log('submit');
  }

  return (
    <form className="form">
      <h1 className="form__title">Перетащите файлы</h1>
      <Upload />
      <button className="form__submit-button" onClick={handleSubmit}>Отправить</button>
    </form>
  );
}

export default App;
