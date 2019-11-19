import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import About from "../Pages/About";
import Admin from "../Pages/Admin";
import Header from "../Header";
import Home from "../Pages/Home";
import Maps from "../Pages/Maps";
import Nav from "../Nav";
import { AppWrapper } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <AppWrapper>
        <Route exact path={"/"} render={() => <Home />} />
        <Route path={"/about"} render={() => <About />} />
        <Route path={"/maps"} render={() => <Maps />} />
        <Route path={"/admin"} render={() => <Admin />} />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
