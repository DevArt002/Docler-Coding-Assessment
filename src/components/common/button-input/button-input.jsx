import React from 'react';
// Import style
import "./button-input.css";

const ButtonInput = (props) => {
  return (
    <div className={props.transparent ? "button-input transparent" : "button-input"}>
      <p>{props.children}</p>
    </div>
  );
};

export default ButtonInput;