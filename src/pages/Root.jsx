import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="line"></div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
