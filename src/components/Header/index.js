import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../resources/images/logo.svg";
import { Header, HeaderItem, HeaderItemExpandable, HeaderLogo } from "./styles";

export default withRouter(({ location }) => (
  <Header>
    <HeaderItem>
      <HeaderLogo src={logo} alt={"logo"} />
      {location.pathname}
    </HeaderItem>
    <HeaderItemExpandable>
      <div id={"midContent"} />
    </HeaderItemExpandable>
    <HeaderItem>
      <span>x</span>
    </HeaderItem>
  </Header>
));
