import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";
import { CustomInput } from "../components/CustomInput";
import { Form } from "react-bootstrap";
import { Spinner } from "../components/Spinner";
import { postBucketItem } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

export const AddNewList = ({ setShow, show, logedInUser, clickedItem, fetchFromAPI }) => {
  const handleClose = () => setShow(false);
  //   console.log(logedInUser);
  const initialState = {
    title: clickedItem ? clickedItem.title : "",
    description: clickedItem ? clickedItem.description : "",
    category: clickedItem ? clickedItem.category : "-----Select category-----",
    location: clickedItem ? clickedItem.location : "",
    cost: clickedItem ? clickedItem.cost : "",
    // owner: logedInUser._id,
    status: clickedItem ? clickedItem.status : "listed",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.owner = logedInUser._id;
    setLoading(true);
    const data = await postBucketItem(formData);
    if (data.status === "success") {
      setFormData(initialState);
      toast.success(data.message);
      fetchFromAPI();
      handleReset();
      handleClose();
    } else {
      toast.error(data.message);
    }
    setLoading(false);
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
      value: formData.title,
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      placeholder: "Describe your list item",
      rows: "3",
      required: true,
      value: formData.description,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      placeholder: "Enter Location",
      value: formData.location,
    },
    {
      label: "Category",
      name: "category",
      type: "select",
      placeholder: "Select Category",
      required: true,
      value: formData.category,
      options: [
        {
          value: "",
          label: "----SELECT CATEGORY----",
        },
        {
          value: "Adventure",
          label: "Adventure",
        },
        {
          value: "Travel",
          label: "Travel",
        },
        {
          value: "Personal Development",
          label: "Personal Development",
        },
      ],
    },
    {
      label: "Cost",
      name: "cost",
      type: "number",
      placeholder: "cost",
      value: formData.cost,
    },
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{clickedItem ? "Edit " : "Add New "}Your Bucket List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {inputes.map((item, i) => (
              <CustomInput key={i} {...item} value={formData[item.name]} onChange={handleChange} />
            ))}
            <div className="row">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <div className="col d-grid">
                    {" "}
                    <Button type="submit">{clickedItem ? "Edit..." : "Add..."}</Button>
                  </div>
                  <div className="col d-grid">
                    {" "}
                    <Button variant="info" onClick={handleReset}>
                      Reset
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
