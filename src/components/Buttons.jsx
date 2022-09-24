import React from "react";

export default function Buttons(props) {
  const build1 = () => {
    props.moveCamera(-1.3766, 0.9677, 0.2704, -8.5095, 0.7789, -4.6373);
  };

  const build2 = () => {
    props.moveCamera(-1.6745, 0.4208, -0.0114, -8.1584, 0.000009, 5.71412);
  };

  const build3 = () => {
    props.moveCamera(1.9591, 0.9982, 0.15248, -4.67989, -1.186897, 5.266005);
  };

  const build4 = () => {
    props.moveCamera(1.482, 0.94187, 0.046892, 7.67059, 0.000009, 6.03139);
  };

  const build5 = () => {
    props.moveCamera(1.24295, 2.47665, 0.202272, 8.68442, 0.000015, -3.47069);
  };
  return (
    <div style={{ position: "absolute", zIndex: 999 }}>
      {/* <button
        onClick={() => {
          console.log(props.controls.current.target);
        }}
      >
        Controls
      </button>
      <button
        onClick={() => {
          console.log(props.camera.position);
        }}
      >
        Camera
      </button> */}
      <button onClick={build1}>Yapi 1</button>
      <button onClick={build2}>Yapi 2</button>
      <button onClick={build3}>Yapi 3</button>
      <button onClick={build4}>Yapi 4</button>
      <button onClick={build5}>Yapi 5</button>
    </div>
  );
}
