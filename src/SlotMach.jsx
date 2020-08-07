import React from 'react';

const SlotM = (props) => {
 // let x = 'A';
  //let y = 'A';
  //let z = 'B';

  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z){
    return(
      <>
      <div className = 'slot_inner'>
      <h1>
      {x} {y} {z}
      </h1>
      <h1> THIS IS MATCHING. </h1>
      <hr />
      </div>
      </>
    );
  }else{
    return(
      <>
      <div className = 'slot_inner'>
      <h1>
      {x} {y} {z}
      </h1>
      <h1> THIS IS NOT MATCHING. </h1>
      <hr />
      </div>
      </>
    );
  }
};

export default SlotM;