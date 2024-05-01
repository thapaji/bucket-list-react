import React from "react";
import { Container } from "react-bootstrap";
import { AuthComponent } from "../components/AuthComponent";

const Dashboard = ({ logedInUser }) => {
  console.log(logedInUser);
  return (
    <AuthComponent logedInUser={logedInUser}>
      <Container className="main pt-5">
        <h4>Dashboard | Welcome {logedInUser?.name}</h4>
        <hr />
      </Container>
    </AuthComponent>
  );
};

export default Dashboard;