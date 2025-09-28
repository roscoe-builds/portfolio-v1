import "./SkillsWidget.css";
import { useState } from "react";

export default function SkillsWidget({ width, height, header, text }) {
  const skills = [
    "HTML, CSS & Three.js",
    "UI/UX Design",
    "3D & Web Interactivity",
    "Visual Strategy",
  ];

  const [checkedSkills, setCheckedSkills] = useState(
    skills.reduce((acc, skill) => {
      acc[skill] = true;
      return acc;
    }, {})
  );

  function toggleSkill(skill) {
    setCheckedSkills((prev) => ({
      ...prev,
      [skill]: !prev[skill],
    }));
  }

  return (
    <div className="widget-wrapper item-fade-in">
      <div
        className="skills-widget"
        style={{ width: width, height: height, animationDelay: "0.1s" }}
      >
        <h2 className="skills-widget-header">{header}</h2>
        <ul className="skills-widget-list">
          {skills.map((skill) => (
            <li key={skill} className="skills-widget-list-item">
              <label className="skills-widget-label">
                <input
                  className="skills-widget-checkbox"
                  type="checkbox"
                  checked={checkedSkills[skill]}
                  onChange={() => toggleSkill(skill)}
                />
                <span className="checkmark">
                  <span className="firework firework-1"></span>
                  <span className="firework firework-2"></span>
                  <span className="firework firework-3"></span>
                  <span className="firework firework-4"></span>
                  <span className="firework firework-5"></span>
                  <span className="firework firework-6"></span>
                </span>
                <span className="skill-text">{skill}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
