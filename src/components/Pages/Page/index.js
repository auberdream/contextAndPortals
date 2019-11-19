import React from "react";
import HeaderPortal from "../../Header/HeaderPortal";
import Button from "../../Button";

export default ({ onHeaderClick, pageName, children }) => (
  <div>
    <HeaderPortal>
      <Button onClick={onHeaderClick}>{pageName}</Button>
    </HeaderPortal>
    {children}
  </div>
);
