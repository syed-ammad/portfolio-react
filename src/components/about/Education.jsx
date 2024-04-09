import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "SOFTWARE ENGINEERING",
    institute: "RIPHA INTERNATIONAL UNIVERSITY",
    details: `  Software engineering is a detailed study of engineering to the design, development and maintenance of software.`,
  },
  {
    year: "2019",
    degree: "INTERMEDIATE - PRE ENGINEERING",
    institute: "Govt College",
    details: `FSc or Faculty of Science is a 2 year higher secondary school certificate that is taken right after completing matriculation.`,
  },
  {
    year: "2017",
    degree: "Matric ",
    institute: "Pak Grammar School",
    details: `Matriculation  is the term that refers to the final examinations that take place at the end of 9th and 10th grades.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
