import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { CustomInput } from "../components/CustomInput";
import { loginUser } from "../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";

export const Login = ({ setLogedInUser }) => {
  const initialState = {
    email: "",
    password: "",
  };
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [resp, setResp] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(email, password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(formData);
    setResp({ status: result.status, message: result.message });

    if (result?.status === "success") {
      console.log(result.user);
      setLogedInUser(result.user);
      navigate("/dashboard");
    }
  };

  const inputes = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
  ];
  return (
    <div>
      <Container className="main" fluid>
        <Row className="d-flex justify-content-center">
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="shadow-lg p-3 rounded border w-75 mt-5 mb-5">
              <h2>Login Now</h2>
              <hr />
              {resp?.message && (
                <Alert variant={resp.status === "success" ? "success" : "danger"}>
                  {resp.message}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                {inputes.map((item, i) => (
                  // console.log(item);
                  <CustomInput
                    key={i}
                    {...item}
                    value={formData[item.name]}
                    onChange={handleChange}
                  />
                ))}
                <div className="d-grid">
                  <Button type="submit">Login...</Button>
                </div>
              </Form>
              <p className="text-end">
                Are you new? <a href="/signup">Signup</a> Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
