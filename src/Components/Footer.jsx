import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <FontAwesomeIcon className="social-icon" icon={faInstagram} />
      <FontAwesomeIcon className="social-icon" icon={faTwitter} />
      <FontAwesomeIcon className="social-icon" icon={faFacebook} />
    </div>
  );
};

export default Footer;
