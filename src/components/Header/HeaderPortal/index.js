import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { NavContext } from "../../App";

export default ({ children }) => {
  const context = useContext(NavContext);

  let node = context.navRef;
  if (!node) return <></>;
  return createPortal(children, node.current);
};
