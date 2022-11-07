import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Shared = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main-container">
      {children}
      </main>
      <Footer />
    </>
  );
};

export default Shared;
