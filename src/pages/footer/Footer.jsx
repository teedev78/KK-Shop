import React from "react";

import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="kk__footer">
      <div className="kk__footer_container">
        <div className="kk__footer_logo">
          <FontAwesomeIcon icon={faCopyright} /> KK-Shop 2022.
        </div>
        <div className="kk__footer_social-lists">
          <FontAwesomeIcon
            icon={faFacebook}
            className="kk__footer_social-icon"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="kk__footer_social-icon"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="kk__footer_social-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
