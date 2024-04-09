import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: " Fullstack Senior Developer - Team Lead ",
    compnayName: "Fusionwave.co",
    details: `  i worked as a professional fullstack developer with fusionwave.co, developed 
    front end website architecture. Worked as a team lead to develop and maintain a highly sophisticated multi-state foreclosure processing application. `,
  },
  {
    year: "   2021 - 2022",
    position: " Fullstack Senior Developer - Library Maintainer ",
    compnayName: "Orient Group Of Companies",
    details: `  i worked as a professional fullstack developer with team Orient, developed 
    app / website architecture. Worked as a team to develop and maintain a highly sophisticated multi-state foreclosure processing application. `,
  },
  {
    year: "   2020 - 2021",
    position: " Fullstack Developer - Team Lead  ",
    compnayName: "Biotech Pvt Limited",
    details: `  i worked as a professional fullstack developer with team pearl system, developed 
    front end website architecture. Worked as a team to develop and maintain a highly sophisticated multi-state foreclosure processing application. `,
  },
  {
    year: "   2019 - 2020",
    position: " Fullstack Web (MERN)",
    compnayName: "The Pearl System",
    details: `  i worked as a professional fullstack developer with team pearl system, developed 
    front end website architecture. Worked as a team to develop and maintain a highly sophisticated multi-state foreclosure processing application. `,
  },
  {
    year: "2019 - 6 Month",
    position: " Fullstack Developer",
    compnayName: "Winstore.pk",
    details: `At winstore.pk we convert winstore.pk (shopify version) to modern js framework.
    we also create the winstore mobile app with flutter from scratch,  `,
  },
  {
    year: "2018 - 2019",
    position: "Flutter w/firebase",
    compnayName: "Ivylab Technologies",
    details: `At Ivylab i created 3 major fullstack apps with flutter & firebase . As a Developer at service-based company i've gained a tremendous amount of experience.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
