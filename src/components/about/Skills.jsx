import React from "react";

const skillsContent = [
  { skillClass: "p65", skillPercent: "75", skillName: "Flutter" },
  { skillClass: "p65", skillPercent: "70", skillName: "React Native" },
  { skillClass: "p58", skillPercent: "58", skillName: "Reactjs" },
  { skillClass: "p78", skillPercent: "78", skillName: "Nextjs" },
  { skillClass: "p70", skillPercent: "70", skillName: "TailwindCss" },
  { skillClass: "p66", skillPercent: "80", skillName: "Node.js" },
  { skillClass: "p66", skillPercent: "80", skillName: "Bun.js" },
  { skillClass: "p66", skillPercent: "66", skillName: "Amazon - EC2/S3" },
  { skillClass: "p70", skillPercent: "80", skillName: "Redis" },
  { skillClass: "p50", skillPercent: "80", skillName: "Firebase" },
  { skillClass: "p70", skillPercent: "80", skillName: "MongoDB" },
  { skillClass: "p70", skillPercent: "70", skillName: "Docker" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
