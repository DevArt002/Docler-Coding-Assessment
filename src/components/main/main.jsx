import React from 'react';
// Import custom components
import Message from "../message/message";
// Import style
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <Message time={"6:00 AM"} senderName={"AL"} message={"Hi, this is Alfs"} fromMe={false}/>
      <Message time={"6:01 AM"} senderName={null} message={"Hi, this is Alex"} fromMe={true}/>
    </div>
  );
};

export default Main;