import React from 'react';
import { Chrono } from 'react-chrono';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';

import './Experience.scss';

// in future might see about fixing this but not now so some good old hard coding

const Experience = () => {
  const data = [
    {
      title: 'Oct. 2023 - Present',
      cardTitle: 'Acorn Web Consultants',
      url: 'https://www.acornwebconsultants.com/',
      cardSubtitle: 'Software Engineer - NM, USA',
      cardDetailedText:
        'Working on multiple client tech stacks to provide the results requested by the team. Utilizing docker and Gitlab for testing database environments and source control. Most recent Tech stack: TS React- web, ReactNative-mobile, nodeJS TS-Backend',
    },
    {
      title: 'Dec. 2021 - Apr. 2023',
      cardTitle: 'Pavilion Renewables',
      url: 'https://pavilion-renewables.com/',
      cardSubtitle: 'Software Engineer - Manamma, Bahrain',
      cardDetailedText:
        "Thrived and grew in a fast-paced startup environment. Performed analysis and provided feedback, resulting in an average 30% increase in solar panels' energy output. Developed new data pipelines for the R&D Team to collect data and display from Siemens PLCs",
    },
    {
      title: 'Oct. 2018 - Mar. 2021',
      cardTitle: 'University of Bristol',
      url: 'https://www.bristol.ac.uk/',
      cardSubtitle: 'Teaching/Research Lab Assistant - Bristol, UK',
      cardDetailedText:
        'Taught complex topics on FPGA using VHDL coding and Embedded and Real-Time Systems on simple robots. Aided in developing and testing autonomous driving technologies using robotic vehicles and created an arena for testing the cars for analyzing sensor arrays.',
    },
  ];

  return (
    <div>
      <div>
        <h2 className="head-text">Experience</h2>
        <div>
          <Chrono items={data} mode="VERTICAL_ALTERNATING" />
        </div>
      </div>
      <h1 className="app__skills-item">Future</h1>
      <p className="app__skills-item">If your looking to hire me, I prefer hybrid / remote but willing to relocate to work onsite</p>
    </div>
  );
};
export default AppWrap(
  MotionWrap(Experience, 'app__experience'),
  'experience',
  'app__primarybg',
);
