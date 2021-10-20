import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ headerData, tableData }) => {
  function buildHead() {
    return headerData.map((headerName) => (
      <th key={headerName}>{headerName.replace("_", " ")}</th>
    ));
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>{buildHead()}</tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
};
export default TableComponent;
