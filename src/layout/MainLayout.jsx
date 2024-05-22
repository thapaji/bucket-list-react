import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ToastContainer } from "react-toastify";
import { Footer } from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";

export const MainLayout = ({ logedInUser, setLogedInUser, setShow, show }) => {
  return (
    <>
      <Header
        logedInUser={logedInUser}
        setLogedInUser={setLogedInUser}
        setShow={setShow}
        show={show}
      />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
};
