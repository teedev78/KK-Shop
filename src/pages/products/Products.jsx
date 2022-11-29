import React from "react";

import "./products.css";
import prod001 from "../../assets/christophe-r-RpUnQPC30Gg-unsplash.jpg";
import prod002 from "../../assets/daihana-monares-I2yLm45_rXk-unsplash.jpg";
import prod003 from "../../assets/daihana-monares-rH9qDj0ZHaU-unsplash.jpg";
import prod004 from "../../assets/daihana-monares-rQWoa1en9N0-unsplash.jpg";
import prod005 from "../../assets/estera-yDT4Z_q2ro8-unsplash.jpg";
import prod006 from "../../assets/julee-juu-Yc2_GGtvPBQ-unsplash.jpg";
import prod007 from "../../assets/maria-lupan-ddBTw5k-U2E-unsplash.jpg";
import prod008 from "../../assets/mariia-shalabaieva-6RN1MjlXO1U-unsplash.jpg";
import prod009 from "../../assets/markus-spiske-gvmxJHJRbYw-unsplash.jpg";
import prod010 from "../../assets/or-hakim-YI6BSRxmQfA-unsplash.jpg";

function Products() {
  return (
    <div className="kk__products">
      <h1>สินค้าแนะนำ</h1>
      <div className="kk__products-lists">
        <ul>
          <li>
            <div className="kk__products_product">
              <img src={prod001} alt="prod001" />
              <p>สินค้าหมายเลข 001</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod002} alt="prod002" />
              <p>สินค้าหมายเลข 002</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod003} alt="prod003" />
              <p>สินค้าหมายเลข 003</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod004} alt="prod004" />
              <p>สินค้าหมายเลข 004</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod005} alt="prod005" />
              <p>สินค้าหมายเลข 005</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod006} alt="prod006" />
              <p>สินค้าหมายเลข 006</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod007} alt="prod007" />
              <p>สินค้าหมายเลข 007</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod008} alt="prod008" />
              <p>สินค้าหมายเลข 008</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod009} alt="prod009" />
              <p>สินค้าหมายเลข 009</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
          <li>
            <div className="kk__products_product">
              <img src={prod010} alt="prod010" />
              <p>สินค้าหมายเลข 010</p>
              <p>100B</p>
              <div className="hide">
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
