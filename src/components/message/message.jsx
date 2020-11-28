import React from 'react';
// Import custom components
import CircleAvatar from "../common/circle-avatar/circle-avatar";
// Import style
import "./message.css";

const Message = (props) => {
  return (
    <div className={props.fromMe ? "message right-msg" : "message"}>
      {!props.fromMe && <CircleAvatar name="AC" small={true}/>}
      <div>
        <p className="time">{props.time}</p>
        <p className="text">{props.message}</p>
      </div>
    </div>
  );
};

export default Message;