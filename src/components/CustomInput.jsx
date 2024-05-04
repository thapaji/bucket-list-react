import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const CustomInput = ({ label, options, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};
