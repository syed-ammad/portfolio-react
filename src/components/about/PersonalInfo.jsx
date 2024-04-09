import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Syed" },
  { meta: "last name", metaInfo: "Ammad" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Lahore" },
  { meta: "phone", metaInfo: "+92 326 9000997" },
  { meta: "Email", metaInfo: "syedammad0.46@gmail.com" },
  { meta: "LinkedIn", metaInfo: " syed-ammad-hussainii" },
  { meta: "langages", metaInfo: "Urdu, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
