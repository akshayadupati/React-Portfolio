import React, { useEffect, useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./index.scss";

function Home() {
  let [skillData, setSkillData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://cms-laravel-backend.herokuapp.com/public/api/skills"
      );
      let skillResponse = await response.json();
      setSkillData(skillResponse);
    };
    fetchData();
  }, []);

  const useSkillData = skillData.map((eachSkill) => {
    return <li key={eachSkill.id}>{eachSkill.title}</li>;
  });

  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Akshaya Dupati</h2>
        <p>
            A front end developer with a passion for creating responsive web
            applications
          </p>
        <div className="prompt">
          <a href="https://www.linkedin.com/in/akshaya-dupati/">
            <LinkedInIcon />
          </a>
          <a href="mailto:akshaya.dupati@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/akshayadupati">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">{skillData.length > 0 && useSkillData}</ol>
      </div>
    </div>
  );
}

export default Home;
