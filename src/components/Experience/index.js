import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "./index.scss";

function Experience() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      let response = await fetch(
        "https://cms-laravel-backend.herokuapp.com/public/api/education"
      );
      let responseData = await response.json();
      setEducation(responseData);
    };
    fetchEducation();

    const fetchExperience = async () => {
      let experienceResponse = await fetch(
        "https://cms-laravel-backend.herokuapp.com/public/api/works"
      );
      let experienceResponseData = await experienceResponse.json();
      setExperience(experienceResponseData);
    };

    fetchExperience();
  }, []);

  const useEducation = education.map((eachEducation, index) => {
    if (index < education.length - 1) {
      return (
        <VerticalTimelineElement
          key={eachEducation.id}
          className="vertical-timeline-element--education"
          date={`${eachEducation.start} - ${eachEducation.end}`}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {eachEducation.title}
          </h3>
          <p> {eachEducation.degree} </p>
        </VerticalTimelineElement>
      );
    }
  });

  const latestEducation = education.map((eachEducation, index) => {
    if (index === education.length - 1) {
      return (
        <VerticalTimelineElement
          key={eachEducation.id}
          className="vertical-timeline-element--education"
          date={`${eachEducation.start} - ${eachEducation.end}`}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {eachEducation.title}
          </h3>
          <p> {eachEducation.degree} </p>
        </VerticalTimelineElement>
      );
    }
  });

  const useExperience = experience.map((eachExperience) => {
    return (
      <VerticalTimelineElement
        key={eachExperience.id}
        className="vertical-timeline-element--work"
        date={`${eachExperience.start_from} - ${eachExperience.end_to}`}
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          {eachExperience.company}
        </h3>
        <p> {eachExperience.job_title} </p>
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {education && useEducation}
        {experience && useExperience}
        {latestEducation}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
