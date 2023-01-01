import React from 'react';
import './index.css';

function Resume() {
  return (
    <section className="resumeContainer">
      <h1 className="resumeHeader">Resume</h1>
      <div className="resumeOverContainer">
        <ul className="resumeOverview">
          <li className="overviewList">
            Dedicated professional with recognized abilites in law enforcement
            investigations and aspiring web developer.
          </li>
          <li className="overviewList">
            Articualte written and oral communicator with extensive experience
            in interviews, interrogations, and legal testimony.
          </li>
          <li className="overviewList">
            Analytical problem solver dedicated to superior work performance.
          </li>
          <li className="overviewList">
            Outstanding abilities to work within a team in order to accomplish a
            common goal.
          </li>
        </ul>
        <div className="proficiency">
          <h3 className="frontHeader">Front End Proficiency</h3>
          <ul className="frontList">
            <li className="listItem">HTML</li>
            <li className="listItem">CSS</li>
            <li className="listItem">JavaScript</li>
            <li className="listItem">jQuery</li>
            <li className="listItem">React.js</li>
            <li className="listItem">IndexedDB</li>
            <li className="listItem">Handlebars / Templating</li>
          </ul>
          <h3 className="backHeader">Back End Proficiency</h3>
          <ul className="backList">
            <li className="listItem">Node.js</li>
            <li className="listItem">Express.js</li>
            <li className="listItem">SQL/MySql</li>
            <li className="listItem">Sequelize</li>
            <li className="listItem">NoSQL (MongoDB, mongoose)</li>
            <li className="listItem">
              API's (3rd Party, RESTfull, Server-side)
            </li>
          </ul>
        </div>
        <h5>
          Download my full{' '}
          <a href="https://github.com/Brad-Hambrick/Resume/raw/main/Professional%20Resume.pdf">
            RESUME
          </a>
        </h5>
      </div>
    </section>
  );
}

export default Resume;
