import React from 'react';
import SlotM from './SlotMach';

const App = () => {


  return (
    <>
    <h1 className="heading_style"> 
      Welcome to {" "}
      <span style={{ fontWeight: "bold" }}>
      Slot machine game
      </span>
      </h1>

      <div className ="slotmachine">
      <SlotM x= 'A' y= 'B' z='C'/>
      <hr />
      <SlotM x='B' y='C' z='D'/>
      <hr />
      <SlotM x='G' y='J' z='R'/>
      <hr />
      <SlotM x='L' y='L' z='L'/>
      <hr />
      </div>
    </>
  );
};

export default App;
