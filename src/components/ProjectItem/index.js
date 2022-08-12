import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectItem(props) {
  return (
    <div className="projectItem">
      <div
        style={{ backgroundImage: `url(${props.project.image.slice(8)})` }}
        className="bgImage"
      ></div>
      <h1>{props.project.title}</h1>
      <p>{props.project.content}</p>
      <a href={props.project.url}><GitHubIcon/></a>
    </div>
  );
}

export default ProjectItem;
