import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './index.css';
import Button from 'react-bootstrap/Button';
const Texteditor = require('../../resources/images/Texteditor.png');
const Goale = require('../../resources/images/Goale.png');
const Bookpicker = require('../../resources/images/Bookpicker.png');
const Socialnetwork = require('../../resources/images/Socialnetwork.png');
const Employeetracker = require('../../resources/images/Employeetracker.png');
const Weather = require('../../resources/images/Weather.png');

function Portfolio() {
  return (
    <CardGroup className="portfolioContainer">
      <h4>
        These are several projects that I have either refactored or created from
        the ground up. Please feel free to look around and I would love some
        constructive criticism.
      </h4>
      <Card className="portfolioItems">
        <Card.Img variant="top" alt="text editor" src={Texteditor} />
        <Card.Body>
          <Card.Title>J.A.T.E.</Card.Title>
          <Card.Title>Just Another Text Editor</Card.Title>
          <Card.Text>
            This project was completed in order to showcase my knowledge working
            with progressive web applications and utilizing webpacks in order to
            configure a full stack web application in which front and back end
            components can run independently or concurrently. This text editor
            also gives the user the ability to save notes and code snippets
            while off line as well.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="https://github.com/Brad-Hambrick/PWA_Text_Editor_via_idb">
            Github Repo
          </Button>{' '}
          <Button href="https://blooming-plains-91084.herokuapp.com/">
            Application
          </Button>
        </Card.Footer>
      </Card>
      <Card className="portfolioItems">
        <Card.Img variant="top" alt="Goale" src={Goale} />
        <Card.Body>
          <Card.Title>Goal-E</Card.Title>
          <Card.Text>
            Goal-E is a full-stack application that was developed to help users
            write goals. The user is given the option to "get started" or "log
            in". After signing up or logging in, the user can create a goal and
            add a description. The created goal will appear in the profile. Once
            a goal is created, then the user can edit that goal. An option also
            exists to complete the goal, which deletes it from the profile.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="https://github.com/Brad-Hambrick/Goal-E">
            Github Repo
          </Button>{' '}
          <Button href="https://evening-stream-22967.herokuapp.com/">
            Application
          </Button>
        </Card.Footer>
      </Card>
      <Card className="portfolioItems">
        <Card.Img variant="top" alt="Book Picker" src={Bookpicker} />
        <Card.Body>
          <Card.Title>Book Picker</Card.Title>
          <Card.Text>
            This application allows the user to choose from nine different genre
            options, and generates a random book that is currently on The New
            York Times Best Sellers List. Recent Suggestions at the bottom right
            of the application will show you the past three searches that have
            been ran. The application pulls data from two different API's, The
            New York Times API & Google Books API.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="https://github.com/Brad-Hambrick/movie-night">
            Github Repo
          </Button>{' '}
          <Button href="https://ckkorson.github.io/movie-night/">
            Application
          </Button>
        </Card.Footer>
      </Card>
      <Card className="portfolioItems">
        <Card.Img variant="top" alt="Social Network API" src={Socialnetwork} />
        <Card.Body>
          <Card.Title>NoSQL Social Network API</Card.Title>
          <Card.Text>
            This project was completed in order to showcase my knowledge working
            with NoSql and utilizing mongoose in order to create a back end API
            that could be utilized to create a social network application. This
            application does not have a front end, it is 100% server side and
            demonstrates routing and the use of MongoDB Compass and insomnia to
            manipulate the database.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="https://github.com/Brad-Hambrick/NoSQL_Social_Network_API_via_Mongoose">
            Github Repo
          </Button>{' '}
          <Button href="https://drive.google.com/file/d/1BrQYtXT3SN3Mk-pDrPLgJzQmgOR8JlFu/view?usp=share_link">
            Video
          </Button>
        </Card.Footer>
      </Card>
      <Card className="portfolioItems">
        <Card.Img variant="top" alt="Employee Tracker" src={Employeetracker} />
        <Card.Body>
          <Card.Title>Sql Nodejs Employee Tracker</Card.Title>
          <Card.Text>
            This project was completed in order to showcase my knowledge using
            MySql and Nodejs. This project is an employee tracker that gives
            users the ability to quickly and easily manage their work force.
            This is a terminal based back end operation that allows employers to
            add employers to add departments, and then also manage the employees
            assigned to those departments, as well as their current salaries.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="https://github.com/Brad-Hambrick/Employee_Tracker_via_Sql-Nodejs">
            Github Repo
          </Button>{' '}
          <Button href="https://drive.google.com/file/d/1xPsIHuevJHYiQv16c_EY7GCRyIpgC1zJ/view?usp=sharing">
            Video
          </Button>
        </Card.Footer>
      </Card>
      <Card className="portfolioItems">
        <Card.Img variant="top" alt="Weather App" src={Weather} />
        <Card.Body>
          <Card.Title>3rd Party API Weather Application</Card.Title>
          <Card.Text>
            This project was completed in order to showcase the ability to work
            with javascript and 3rd Party API's. This application pulls current
            weather data for any city within the United States and also gives a
            5-day forecast. This application is also mobile friendly. The
            weather data is pulling from the Open Weather One Call API.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="https://github.com/Brad-Hambrick/Brad-s_3rdParty_API_Weather_App">
            Github Repo
          </Button>{' '}
          <Button href="https://brad-hambrick.github.io/Brad-s_3rdParty_API_Weather_App/">
            Application
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Portfolio;
