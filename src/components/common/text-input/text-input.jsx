import React from 'react';
// Import style
import "./text-input.css";

const TextInput = (props) => {
  return (
    <textarea type="text" className="text-input" placeholder={props.placeholder} onChange={props.onChange}>
      
    </textarea>
  );
};

export default TextInput;