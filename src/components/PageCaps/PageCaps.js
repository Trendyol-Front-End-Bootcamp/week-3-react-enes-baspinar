import React from "react";
import "./PageCaps.scss";

const PageCaps = ({ pageCaps }) => (
  <img className="caps" src={pageCaps} alt="" />
);

export default React.memo(PageCaps);
