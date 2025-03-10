import React from 'react';
import '../CSS/skill_stack.css'; // Import the CSS file
import directory from '../images/skills&stack/active_directory.png'; // Import the images
import azure from '../images/skills&stack/azure.png'; // Import the images
import burpsuite from '../images/skills&stack/burpsuite.png'; // Import the images
import cplus from '../images/skills&stack/c++.png'; // Import the images
import css from '../images/skills&stack/css.png'; // Import the images
import englishFrench from '../images/skills&stack/English_french.png'; // Import the images
import firewall from '../images/skills&stack/firewall.png'; // Import the images
import github from '../images/skills&stack/github.png'; // Import the images
import html from '../images/skills&stack/html5.png'; // Import the images
import kubernete from '../images/skills&stack/kubernetes.png'; // Import the images
import nebula from '../images/skills&stack/nebula.png'; // Import the images
import nodejs from '../images/skills&stack/nodejs.png'; // Import the images
import javascr from '../images/skills&stack/Javascript.png'; // Import the images
import penetration from '../images/skills&stack/penetration.png'; // Import the images
import problemsolving from '../images/skills&stack/problemsolving.png'; // Import the images
import projectmanangement from '../images/skills&stack/projectmanagement.png'; // Import the images
import python from '../images/skills&stack/python.png'; // Import the images
import react from '../images/skills&stack/react.png'; // Import the images
import ruby from '../images/skills&stack/ruby.png'; // Import the images
import suricata from '../images/skills&stack/suricata.png'; // Import the images
import training from '../images/skills&stack/technicaltraining.png'; // Import the images
import wireshark from '../images/skills&stack/wireshark.png'; // Import the images
import Incident from '../images/skills&stack/incident.png'; // Import the images
import communication from '../images/skills&stack/communication.png'; // Import the images
import openmind from '../images/skills&stack/openmind.png'; // Import the images

const skillsData = [
  {
    id: 1,
    category: 'Cybersecurity Tools & Technologies',
    skills: [
      { name: 'Burp Suite', image: burpsuite },
      { name: 'Suricata', image: suricata },
      { name: 'VPN Nebula', image: nebula },
      { name: 'Active Directory', image: directory },
    ],
  },
  {
    id: 2,
    category: 'Security Implementation',
    skills: [
      { name: 'Firewall Management', image: firewall },
      { name: 'Cloud Security (Azure)', image: azure },
      { name: 'Kubernetes', image: kubernete },
      { name: 'Penetration Testing', image: penetration },
      { name: 'Incident response', image: Incident },
      { name: 'Wireshark', image: wireshark },
    ],
  },
  {
    id: 3,
    category: 'Programming & Scripting',
    skills: [
      { name: 'Python', image: python },
      { name: 'JavaScript', image: javascr },
      { name: 'C++', image: cplus },
      { name: 'Ruby', image: ruby },
    ],
  },
  {
    id: 4,
    category: 'Development & Collaboration',
    skills: [
      { name: 'React', image: react },
      { name: 'Node.js', image: nodejs },
      { name: 'CSS', image: css },
      { name: 'HTML5', image: html },
      { name: 'Git & GitHub', image: github },
    ],
  },
  {
    id: 5,
    category: 'Leadership & Collaboration',
    skills: [
      { name: 'Project Management', image: projectmanangement },
      { name: 'Technical Training', image: training },
      { name: 'Problem Solving', image: problemsolving },
      { name: 'Open-Mindset', image: openmind },
      { name: 'Communication', image: communication },
    ],
  },
  {
    id: 6,
    category: 'Languages',
    skills: [
      { name: 'English-Fluent', image: englishFrench },
      { name: 'French-Fluent', image: englishFrench },
    ],
  },
];

function Skill() {
  return (
    <div className="skills-section">
      <h1>My Skills & Tech Stack</h1>
      {skillsData.map((category) => (
        <div key={category.id} className="skill-category">
          <h2>
            {category.category}
          </h2>
          <div className="skills">
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill">
                <img src={skill.image} alt="" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill;
