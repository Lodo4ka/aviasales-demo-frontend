import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Destination from "./Destination";
import Cards from "./Cards";
import Price from "./Price";
import Offers from "./Offers";
import Article from "./Article";
import Mobile from "./Mobile";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Destination />
        <Cards />
        <Price />
        <Offers />
        <Article />
        <Mobile />
        <Footer />
      </div>
    );
  }
}

export default App;
