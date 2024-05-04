import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";
import { CustomInput } from "../components/CustomInput";
import { Form } from "react-bootstrap";
import { Spinner } from "../components/Spinner";
import { postBucketItem } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

export const ListDetails = ({ setShow, show, logedInUser, clickedId }) => {
  const handleClose = () => setShow(false);
  //   console.log(logedInUser);

  const handleReset = () => {
    setFormData(initialState);
  };


  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{clickedId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Description :</h3>
          <hr />
          <p>{clickedId}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};
