import React from 'react';
// Import custom components
import CircleAvatar from "../../common/circle-avatar/circle-avatar";
import ButtonInput from "../../common/button-input/button-input";
// Import style
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <CircleAvatar name="AC"/>
      <ButtonInput transparent={true}>Settings</ButtonInput>
      <p className="app-name-label">Message</p>
    </div>
  );
};

export default Header;