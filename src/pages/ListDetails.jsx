import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddNewList } from "../pages/AddNewList";

import React from "react";
import { CustomInput } from "../components/CustomInput";
import { Col, Form, Row } from "react-bootstrap";
import { Spinner } from "../components/Spinner";
import { deleteBucketItem } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

export const ListDetails = ({ setShowDetails, showDetails, logedInUser, clickedItem }) => {
  const [listItem, setListIteam] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShowDetails(false);

  const handleReset = () => {
    setFormData(initialState);
  };

  const setListTicked = () => {
    // setthe item ticked....
    setShowDetails(false);
    toast.success("You have ticked this List");
  };

  const handleDelete = async (_id) => {
    // console.log(clickedItem);
    const { status, message } = await deleteBucketItem([clickedItem._id]);
    setShowDetails(false);
    toast[status](message);
  };

  return (
    <>
      <Modal show={showDetails} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{clickedItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="col-8">
              <p>
                <span className="fw-bolder">Category : </span> {clickedItem.category}
              </p>
            </Col>
            <Col>
              <p>
                <span className="fw-bolder">Location : </span> {clickedItem.location}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="col-8">
              <p>
                <span className="fw-bolder">Cost : </span> {clickedItem.cost}
              </p>
            </Col>
            <Col>
              <p>
                <span className="fw-bolder">Status : </span> {clickedItem.status}
              </p>
            </Col>
            <Row>
              <Col>
                <p>
                  <span className="fw-bolder">Description : </span> {clickedItem.description}
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="col-9 fw-bolder">
                <p>Have you completed this bucket list..???? Now you can tick this..</p>
              </Col>
              <Col>
                <Button variant="primary" onClick={setListTicked}>
                  Tick
                </Button>
                {""}
              </Col>
            </Row>
          </Row>

          <div>
            <Row>
              <Col className="d-grid">
                <Button
                  variant="info"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Edit
                </Button>
              </Col>
              <Col className="d-grid">
                <Button variant="danger" onClick={() => handleDelete()}>
                  Delete
                </Button>
              </Col>
            </Row>
            <AddNewList
              logedInUser={logedInUser}
              setShow={setShow}
              show={show}
              clickedItem={clickedItem}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
