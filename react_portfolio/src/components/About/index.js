import React from 'react';
import Card from 'react-bootstrap/Card';
import '../About/index.css';
const Headshot = require('../../resources/images/Headshot.jpg');

function About(props) {
  return (
    <div className="about">
      <Card>
        <Card.Header>
          <img className="headshot" alt="headshot" src={Headshot} />
          <h2 className="nameHeader">Hello, my name is Brad Hambrick</h2>
          <p>
            I am currently a student of the Full Stack Web Development Bootcamp
            through Vanderbilt University. My previous professional experience
            consists of 10 years in law enforcement with the Metropolitan
            Nashville Police Department.
          </p>
          <p>
            Growing up my dream was to become a fighter pilot in the military. I
            attended Middle Tennessee State University and was majoring in
            Aerospace Technology. I applied for flight school in the United
            States Marine Corps. Although extremely competitve, I was able to
            secure a flight contract. I then attended Marine Corps Officer
            Candidate School in Quantico, VA during a summer between college
            semesters. This is an extremely difficult and demanding bootcamp
            style leadership school and is rated as one of the top leadership
            schools in the country. I graduated after ten weeks of instruction
            and testing. Upon returning to middle Tennessee to complete my
            college education, I was sent to Pensacola, FL in order to complete
            a flight physical. It was then determined that I had high pitch
            hearing loss in my left ear and was disqualified from flight school.
            Needless to say, I was devastated as I watched my initial dream slip
            through my fingers. I ultimately did not finish my education as I
            needed to do some soul searching to figure out the new direction of
            my life. I had a good friend who was a police officer in Nashville
            and he talked me into coming and riding along with him one night for
            one of his shifts. I saw then that there was another way that I
            could serve my community. I applied and was ultimately hired.
            Throughout my career in law enforcement, I have worked regular
            patrol, street level proactive enforcement, investigations that
            range from simple property crimes all the way to homicide. In 2017,
            I interviewed for the Gang Unit and was selected for transfer. I
            worked in Gang Unit intelligence and enforcement for two years
            before being asked to join a new unit that specialized in firearm
            violence analyzing large scale shooting networks. I have worked in
            this capacity ever since. In early 2022, I decided that it was time
            for another change. After doing alot of soul searching, I was
            introduced to web development. The more I explored this technology
            the more I fell in love with it. I have explained my past in order
            to note that although I only have approximately one year of
            experience in web development, I have alot of life experience that
            makes me a great candidate to work in Web Development. I have
            conducted complex investigations and planned operations that require
            the utmost of attention to detail. I have led these operations as
            well as been a member of a team executing these operations. I
            understand the value to working as a team in order to complete a
            common goal and that transfers directly to web development. Web
            development is very similar to conducting a complex investigation,
            You have to go into it with an open mind and have extreme attention
            to detail.
          </p>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              GOOD, BETTER, BEST. NEVER REST UNTIL THE GOOD IS BETTER AND THE
              BETTER IS BEST
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
