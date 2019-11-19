import React from "react";
import logo from "../../resources/images/logo.svg";
import { Header, HeaderItem, HeaderItemExpandable, HeaderLogo } from "./styles";

export default () => (
  <Header>
    <HeaderItem>
      <HeaderLogo src={logo} alt={"logo"} />
    </HeaderItem>
    <HeaderItemExpandable>
      <span>Mid content</span>
    </HeaderItemExpandable>
    <HeaderItem>
      <span>x</span>
    </HeaderItem>
  </Header>
);
