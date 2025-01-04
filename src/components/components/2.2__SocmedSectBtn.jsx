import React from "react";
import SocmedBtn from "./2.2.1__SocmedBtn.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocmedSectBtn = () => {
  const socialMediaLinks = [
    {
      href: "http://facebook.com",
      icon: <FontAwesomeIcon icon={faFacebookF} size="lg" />,
    },
    {
      href: "http://twitter.com",
      icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
    },
    {
      href: "http://instagram.com",
      icon: <FontAwesomeIcon icon={faInstagram} size="xl" />,
    },
  ];

  return (
    <div className="flex gap-4">
      {socialMediaLinks.map((link, index) => (
        <SocmedBtn key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
};

export default SocmedSectBtn;
