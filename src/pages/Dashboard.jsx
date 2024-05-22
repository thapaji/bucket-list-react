import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthComponent } from "../components/AuthComponent";
import { Table } from "../components/Table";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ logedInUser, fetchFromAPI, listItems }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!logedInUser?._id) {
      navigate("/");
    }
  }, []);
  return (
    <AuthComponent logedInUser={logedInUser}>
      <Container className="main pt-5">
        <h4>Dashboard | Welcome {logedInUser?.name}</h4>
        <hr />
        <Table logedInUser={logedInUser} fetchFromAPI={fetchFromAPI} listItems={listItems}/>
      </Container>
    </AuthComponent>
  );
};

export default Dashboard;
