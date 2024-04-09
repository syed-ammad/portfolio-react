import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/syed-ammad-husaini/",
  },
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/syed.ammad.393?mibextid=eQY6cl",
  },
  {
    iconName: "fa fa-instagram",
    link: "https://www.instagram.com/_syed.ammad/?igsh=eDJsNWcwdmhqYTR3&utm_source=qr",
  },
  { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
