import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from '../Header'
import Nav from '../Nav'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
