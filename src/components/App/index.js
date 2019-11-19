import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import About from "../Pages/About";
import Admin from "../Pages/Admin";
import Header from "../Header";
import Home from "../Pages/Home";
import Logout from "../Pages/Logout";
import Maps from "../Pages/Maps";
import Nav from "../Nav";
import Page from "../Pages/Page";
import { AppWrapper, GlobalStyle } from "./styles";

export default () => {
  const [navColor, setNavColor] = useState("palevioletred");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Nav navColor={navColor} />
      <AppWrapper>
        <Route
          exact
          path={"/"}
          render={() => (
            <Page
              onHeaderClick={() => setNavColor("palevioletred")}
              pageName={"Home"}
            >
              <Home />
            </Page>
          )}
        />
        <Route
          path={"/about"}
          render={() => (
            <Page
              onHeaderClick={() => setNavColor("salmon")}
              pageName={"About"}
            >
              <About />
            </Page>
          )}
        />
        <Route
          path={"/maps"}
          render={() => (
            <Page
              onHeaderClick={() => setNavColor("cornflowerblue")}
              pageName={"Maps"}
            >
              <Maps />
            </Page>
          )}
        />
        <Route
          path={"/admin"}
          render={() => (
            <Page
              onHeaderClick={() => setNavColor("cadetblue")}
              pageName={"Admin"}
            >
              <Admin />
            </Page>
          )}
        />
        <Route
          path={"/logout"}
          render={() => (
            <Page
              pageName={"Logout"}
              onHeaderClick={() => setNavColor("black")}
            >
              <Logout />
            </Page>
          )}
        />
      </AppWrapper>
    </BrowserRouter>
  );
};
