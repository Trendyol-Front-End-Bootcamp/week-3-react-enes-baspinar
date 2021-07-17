import "./Pagination.scss";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TablePagination from "@material-ui/core/TablePagination";

function Pagination({ setApiUrl, page, setPage, characterCount }) {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(newPage);
    setApiUrl(`https://rickandmortyapi.com/api/character/?page=${newPage + 1}`);
  };
  console.log(characterCount);
  return (
    <TablePagination
      component="div"
      count={characterCount}
      page={page}
      rowsPerPage={20}
      rowsPerPageOptions={[]}
      onPageChange={handleChangePage}
    />
  );
}

export default Pagination;
