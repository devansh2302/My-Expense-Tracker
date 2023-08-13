import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddExpense from "./AddExpense";
import Expense from "./Expense";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeNavbar() {
  const [tableData, setTableData] = useState([]);
  const [inputData, setInputData] = useState({});
  const [searchItem, setSearchItem] = useState("");
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  // const handleEdit = (setShow) => {
  //   setShow(true);
  // };

  // const handleDate = (e) => {
  //   console.log(e.target.value);
  // };

  const addTable = () => {
    setTableData([...tableData, inputData]);
  };

  const deleteItem = (i) => {
    const updatedItems = [...tableData];
    updatedItems.splice(i, 1);
    setTableData(updatedItems);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <h4>My Expense Manager</h4>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Filter by Date"
                className="me-2"
                aria-label="Search"
              />
              <Form.Control
                onChange={handleSearch}
                type="search"
                placeholder="Search by name"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            {/* <Button  variant="success">+Add Expense</Button>{' '} */}
            <AddExpense
              handleEdit={() => handleEdit(true)}
              handleEvent={handleChange}
              handleTable={addTable}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Expense
        handleEdit={handleEdit()}
        searchItem={searchItem}
        deleteItem={deleteItem}
        tableData={tableData}
      />
    </>
  );
}
export default HomeNavbar;
