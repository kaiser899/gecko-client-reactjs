import React from "react";
import { Table, Pagination } from "react-bootstrap";
import "./table.css";

const TableComponent = ({
  headerData,
  tableData,
  decrementPageNo,
  incrementPageNo,
  pageNo = 0,
  decrementButtonDisable = false,
}) => {
  function buildHead() {
    return headerData.map((headerName) => (
      <th style={{ textTransform: "uppercase" }} key={headerName}>
        {headerName.replace("_", " ")}
      </th>
    ));
  }

  const getTableRow = () => {
    return tableData.map((rowObj, index) => {
      return (
        <tr key={"table-row-" + index}>
          {headerData.map((v, index) => (
            <td key={v + index}>
              {v === "image" ? (
                <img
                  src={rowObj[v]}
                  width="50px"
                  alt="bitcoin icon"
                  onLoad={() => console.log("image loaded")}
                />
              ) : (
                rowObj[v]
              )}
            </td>
          ))}
        </tr>
      );
    });
  };

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>{buildHead()}</tr>
        </thead>
        <tbody>{getTableRow()}</tbody>
      </Table>
      <div className="table-pagination">
        <Pagination>
          <Pagination.Prev
            onClick={decrementPageNo}
            disabled={decrementButtonDisable}
          />
          <Pagination.Item>{pageNo}</Pagination.Item>
          <Pagination.Next onClick={incrementPageNo} />
        </Pagination>
      </div>
    </div>
  );
};
export default TableComponent;
