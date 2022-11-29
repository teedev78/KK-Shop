import React from "react";

import "./categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGamepad,
  faTv,
  faShirt,
  faDumbbell,
  faMobile,
  faKitchenSet,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";

function Categories() {
  return (
    <div className="kk__categories">
      <h1>หมวดหมู่สินค้า</h1>
      <div className="kk__categories-lists">
        <ul>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faBagShopping} className='cate-icon' />
            <p>กระเป๋า</p>
          </li>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faGamepad} className='cate-icon' />
            <p>เกมและของเล่น</p>
          </li>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faTv} className='cate-icon' />
            <p>ทีวีและเครื่องใช้ไฟฟ้า</p>
          </li>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faShirt} className='cate-icon' />
            <p>เสื้อผ้า</p>
          </li>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faDumbbell} className='cate-icon' />
            <p>อุปกรณ์กีฬาและการออกกำลังกาย</p>
          </li>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faMobile} className='cate-icon' />
            <p>โทรศัพท์มือถือ</p>
          </li>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faKitchenSet} className='cate-icon' />
            <p>เครื่องครัว</p>
          </li>
          <li className="kk__categories-list">
            <FontAwesomeIcon icon={faWineGlass} className='cate-icon' />
            <p>อาหารและเครื่องดื่ม</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
