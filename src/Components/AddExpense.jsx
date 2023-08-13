import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddExpense(props, handleEdit) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const category = [
    "Travel",
    "Food and Groceries",
    "Utility Bills",
    "Childcare and School Costs",
    "Clothing and Personal Upkeep",
  ];
  const handleForm = () => {
    handleShow();
    handleEdit(handleShow);
  };

  return (
    <>
      <Button variant="success" onClick={handleForm}>
        + Add Expense
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                autoFocus
                onChange={props.handleEvent}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Describe the Expense"
                autoFocus
                onChange={props.handleEvent}
              />
            </Form.Group>
            <Form.Select
              name="category"
              onChange={props.handleEvent}
              aria-label="Default select example"
            >
              <option>Select Category</option>
              {category.map((category, i) => (
                <option key={`index-${i}`}>{category}</option>
              ))}
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date of Expense</Form.Label>
              <Form.Control
                type="date"
                name="date"
                placeholder="Date of Expense"
                autoFocus
                onChange={props.handleEvent}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="amount"
                placeholder="Amount in INR"
                autoFocus
                onChange={props.handleEvent}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              {
                props.handleTable();
              }
            }}
          >
            Create Expense
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddExpense;
