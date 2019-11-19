import React from "react";
import { createPortal } from "react-dom";

export default ({ children }) => {
  let node = document.getElementById("midContent");
  if (!node) return <></>;
  return createPortal(children, node);
};
