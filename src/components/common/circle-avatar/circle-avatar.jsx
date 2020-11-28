import React from 'react';
// Import style
import "./circle-avatar.css";

const CircleAvatar = (props) => {
  return (
      <div className={props.small ? "circle-avatar small-avt" : "circle-avatar"}>
        <p>{props.name}</p>
        {!props.small && <span></span>}
      </div>
  );
};

export default CircleAvatar;