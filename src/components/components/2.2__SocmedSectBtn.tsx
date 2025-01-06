import SocmedBtn from "./2.2.1__SocmedBtn.js";
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
      label: "Visit Facebook",
    },
    {
      href: "http://twitter.com",
      icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
      label: "Visit Twitter",
    },
    {
      href: "http://instagram.com",
      icon: <FontAwesomeIcon icon={faInstagram} size="xl" />,
      label: "Visit Instagram",
    },
  ];

  return (
    <div className="flex gap-4 lg:mt-0 xl:mt-20">
      {socialMediaLinks.map((link, index) => (
        <SocmedBtn
          key={index}
          href={link.href}
          icon={link.icon}
          ariaLabel={link.label}
        />
      ))}
    </div>
  );
};

export default SocmedSectBtn;
