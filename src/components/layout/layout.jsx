import React from 'react';
// Import custom components
import Header from "./header/header";
import Footer from "./footer/footer";
import Main from "../main/main"

const Layout = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;