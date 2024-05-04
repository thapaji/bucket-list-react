import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthComponent } from "../components/AuthComponent";
import { Table } from "../components/Table";

const Dashboard = ({ logedInUser }) => {
  return (
    <AuthComponent logedInUser={logedInUser}>
      <Container className="main pt-5">
        <h4>Dashboard | Welcome {logedInUser?.name}</h4>
        <hr />
        <Table />
      </Container>
    </AuthComponent>
  );
};

export default Dashboard;
