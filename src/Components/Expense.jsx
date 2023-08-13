import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Expense({ tableData = [], deleteItem, searchItem, handleEdit }) {
  const openModel = () => {
    handleEdit(setShow);
  };
  const handleDeleteItem = (i) => {
    deleteItem(i);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category </th>
            <th>Date of Expense </th>
            <th>Amount </th>
            <th>Updated At</th>
            <th>Created BY </th>
            <th> </th>
          </tr>
        </thead>

        {/* {tableData.filter((data) => data.name === searchItem)} */}

        {tableData?.map((data, i) => {
          const { name, category, date, amount } = data;
          return (
            <tr key={`tableData-${i}`}>
              <td>{name} </td>
              <td>{category} </td>
              <td>{date} </td>
              <td>{amount}</td>
              <td></td>
              <td></td>
              <td>
                <button onClick={openModel}>
                  <EditIcon />
                </button>
                <IconButton
                  onClick={() => handleDeleteItem(i)}
                  color="error"
                  aria-label="delete"
                  size="large"
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Expense;
