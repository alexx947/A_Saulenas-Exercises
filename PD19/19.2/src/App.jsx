import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('First Text');

  const changeText = () => {
    setText('New Text');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={changeText}>Press Buton for New Text</button>
    </div>
  )
}

export default App