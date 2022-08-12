import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> Contact : +1-647-510-4887</p>
      <p> Email : akshaya.dupati@gmail.com</p>
    </div>
  );
}

export default Footer;
