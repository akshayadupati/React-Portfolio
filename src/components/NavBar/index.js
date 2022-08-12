import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";

function NavBar() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default NavBar;
