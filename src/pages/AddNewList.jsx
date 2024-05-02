import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";

export const AddNewList = ({ setShow, show }) => {
  const handleClose = () => setShow(false);

  const inputes = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Enter Title",
      required: true,
    },
    {
      label: "Location",
      name: "location",
      type: "location",
      placeholder: "Enter Location",
    },
    {
      label: "Category",
      name: "category",
      type: "category",
      placeholder: "Select Category",
      required: true,
    },
    {
      label: "Cost",
      name: "cost",
      type: "cost",
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
          I will not close if you click outside me. Do not even try to press escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
