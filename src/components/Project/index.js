import React, { useEffect, useState } from "react";
import ProjectItem from "../ProjectItem";
import "./index.scss";

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let response = await fetch(
        "https://cms-laravel-backend.herokuapp.com/public/api/projects"
      );
      let apiResponse = await response.json();
      setProjects(apiResponse);
    };

    fetchProjects();
  }, []);

  let projectItem = projects.map((eachProject, index) => {
    return <ProjectItem id={index} project={eachProject} />;
  });
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">{projects && projectItem}</div>
    </div>
  );
}

export default Project;
