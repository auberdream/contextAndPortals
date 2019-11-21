import React, { useContext, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import logo from "../../resources/images/logo.svg";
import { Header, HeaderItem, HeaderItemExpandable, HeaderLogo } from "./styles";
import { NavContext } from "../App";

export default withRouter(({ location }) => {
  const context = useContext(NavContext);
  const midContentRef = useRef();

  useEffect(() => {
    console.log(midContentRef);
    if (midContentRef.current) context.setNavRef(midContentRef);
  }, [midContentRef]);

  return (
    <Header>
      <HeaderItem>
        <HeaderLogo src={logo} alt={"logo"} />
        {location.pathname}
      </HeaderItem>
      <HeaderItemExpandable>
        <div id={"midContent"} ref={midContentRef} />
      </HeaderItemExpandable>
      <HeaderItem>
        <span>x</span>
      </HeaderItem>
    </Header>
  );
});
