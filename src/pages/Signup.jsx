import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../components/CustomInput";
import { postNewUser } from "../helpers/axiosHelper";
import { Spinner } from "../components/Spinner";
import { toast } from "react-toastify";

const Signup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [resp, setResp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { confirmPassword, ...rest } = formData;

    if (confirmPassword !== rest.password) {
      return alert("Passwords do not match!!!");
    }
    // console.log(formData);
    const data = await postNewUser(rest);
    setResp(data);
    if (data.status === "success") {
      setFormData(initialState);
      toast.success(resp.message);
    } else {
      toast.error(resp.message);
    }
    setLoading(false);
  };

  const inputes = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter Name",
      required: true,
    },
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
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      required: true,
    },
  ];
  return (
    <div>
      <Container className="main" fluid>
        <Row className="d-flex justify-content-center">
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="shadow-lg p-3 rounded border w-75 mt-5 mb-5 glasscard">
              <h2>Sign Up Now</h2>
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
                  {loading ? <Spinner /> : <Button type="submit">Sign Up...</Button>}
                </div>
              </Form>
              <p className="text-end">
                Already have an account <a href="/signup">Login</a> Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
