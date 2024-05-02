import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";
import { CustomInput } from "../components/CustomInput";
import { Form } from "react-bootstrap";

export const AddNewList = ({ setShow, show }) => {
  const handleClose = () => setShow(false);

  const initialState = {
    title: "",
    description: "",
    category: "-----Select category-----",
    location: "",
    cost: "",
    owner: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleReset();
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const inputes = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Enter Title",
      required: true,
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      placeholder: "Describe your list item",
      rows: "3",
      required: true,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      placeholder: "Enter Location",
    },
    {
      label: "Category",
      name: "category",
      type: "text",
      placeholder: "Select Category",
      required: true,
    },
    {
      label: "Cost",
      name: "cost",
      type: "number",
      placeholder: "cost",
    },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New To Your Bucket List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {inputes.map((item, i) => (
              // console.log(item);
              <CustomInput key={i} {...item} value={formData[item.name]} onChange={handleChange} />
            ))}
            <div className="d-flex justify-content-between">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <Button type="submit">Sign Up...</Button>
                  <Button variant="info" onClick={handleReset}>Reset</Button>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
    
                </>
              )}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
