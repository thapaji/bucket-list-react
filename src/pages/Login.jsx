import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { CustomInput } from "../components/CustomInput";
import { loginUser } from "../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { toast } from "react-toastify";

export const Login = ({ setLogedInUser }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [resp, setResp] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const result = await loginUser(formData);
      setResp({ status: result.status, message: result.message });

      if (resp?.status === "success") {
        // console.log(result.user);
        setLogedInUser(result.user);
        toast.success(resp.message);
        navigate("/dashboard");
      } else {
        toast.error(resp.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(resp.message);
    } finally {
      setLoading(false);
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
      <Container className="main">
        <Row className="d-flex justify-content-center ">
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="shadow-lg p-3 rounded border w-75 mt-5 mb-5 glasscard">
              <h2>Login Now</h2>
              <hr />
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
                  {loading ? <Spinner /> : <Button type="submit">Login...</Button>}
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
