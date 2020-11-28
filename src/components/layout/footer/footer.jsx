import React from 'react';
// Import custom components
import TextInput from "../../common/text-input/text-input";
import ButtonInput from "../../common/button-input/button-input";
// Import style
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <TextInput placeholder="Enter a message" onChange={() => console.log("sdffsd")}/>
      <ButtonInput transparent={false}>Send</ButtonInput>
  </div>
  );
};

export default Footer;