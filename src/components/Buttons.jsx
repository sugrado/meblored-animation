import React from "react";

export default function Buttons(props) {
  const build1 = () => {
    props.moveCamera(0.0387, 0.851, 1.722, 2.8, 0.7, 2.9);
  };

  const build2 = () => {
    props.moveCamera(-0.01, 1.122, 0.36, -5.64, 0.5, 7.4786);
  };

  const build3 = () => {
    props.moveCamera(-0.105, 0.903, -2.4466, 5.89, 0.0000069, 3.7368);
  };

  const build4 = () => {
    props.moveCamera(-0.3696, 1.6585, -3.014, 6.7591, 0.2261, -7.718);
  };

  const build5 = () => {
    props.moveCamera(-0.05499, 3.0742, -2.2527, -6.51246, 0.39741, -10.992);
  };
  return (
    <div style={{ position: "absolute", zIndex: 999 }}>
      {/* <button
          onClick={() => {
            console.log(controls.current.target);
          }}
        >
          Controls
        </button>
        <button
          onClick={() => {
            console.log(camera.position);
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
