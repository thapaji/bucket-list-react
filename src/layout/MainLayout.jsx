import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ToastContainer } from "react-toastify";
import { Footer } from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";

export const MainLayout = ({ logedInUser, setShow }) => {
  return (
    <>
      <Header logedInUser={logedInUser} setShow={setShow} />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
};
