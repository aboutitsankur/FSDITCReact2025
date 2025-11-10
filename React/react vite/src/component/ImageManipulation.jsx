import React, { useState } from 'react';
import im from './cat.png';

export default function ImageManipulation() {
  const [height, setHeight] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function setColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          margin: '0 auto',
          border: '2px solid black',
          height: '450px',
          width: '450px',
          paddingLeft: '100px',
          paddingTop: '100px',
          backgroundColor: backgroundColor,
        }}
      >
        <img src={im} height={height} width={200} alt="cat" />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setHeight(height + 20)}>Increase Height</button>
        <button onClick={() => setHeight(height - 20)}>Decrease Height</button>
        <button onClick={setColor}>Change Background Colour</button>
        <button>Rotate Image</button>
      </div>
    </div>
  );
}