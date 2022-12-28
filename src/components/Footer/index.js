import React from 'react';
import './index.css';
const Github = require('../../resources/icons/github-mark.png');
const LinkedIn = require('../../resources/icons/LI-Logo.png');

const Footer = () => (
  <footer id="footer" className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Professional Links</h5>
          <p>
            Thank you for visiting my portfolio! If there are any questions
            please utilize the Contact Form within this portfolio.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <a href="https://github.com/Brad-Hambrick">
                <img className="githubIcon" alt="github" src={Github} />
                <h6 className="githubLink">GitHub</h6>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled">
            <li>
              <a href="https://www.linkedin.com/in/brad-hambrick-9b2747244/">
                <img className="linkedInIcon" alt="LinkedIn" src={LinkedIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
// shoutout to https://gist.github.com/Luke-zhang-04 for the footer!
