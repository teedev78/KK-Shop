import React from "react";
import Header from "../../components/header/Header";
import { Cart, Categories, Footer, Products, Promotions } from "../index";

import "./explore.css";

function Explore() {
  return (
    <div className="kk__explore">
      <Header />
      <Promotions />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Explore;
