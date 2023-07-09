import '../CSS/mainpage.css';
import profilepicture from '../images/profilepicture.jpeg';

const Profile = () => (
  <div className="body">
    <div className="home">
      <div className="profiles">
        <img src={profilepicture} className="profilepicture" alt="myprofile" />
        <ul className="profile-links">
          <li>
            <a href="https://www.linkedin.com/in/hakichris/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/hakichris">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/hakichris2">Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/christian.hakizimana.1">Facebook</a>
          </li>
        </ul>
        <span>Email: Hakizachrist1@outlook.com</span>
        <span>Tel: +257 62 876959</span>
      </div>
      <div className="intro">
        <h1 className="head1">
          Hey there. I’m Christian Hakizimana
          <span className="green-color">
            A software engineer with focus on full stack web development
          </span>
        </h1>
        <p className="intro-exp">
          With a background in developing efficient software applications in a global market.
          More than
          {' '}
          <span className="work-hours bold"> 3 years </span>
          {' '}
          of experience, including mentoring
          {' '}
          <span className="mentoring bold">10+</span>
          {' '}
          junior developers to achieve concrete goals on a strict deadline.
          Strong skills include
          {' '}
          <span className="mentoring bold">
            {' '}
            React, Redux, JavaScript, Ruby on Rails, C++, Java, Leadership, Interpersonnal skills,
            Remote pair-programming.
          </span>
          {' '}
        </p>
      </div>
    </div>
  </div>
);

export default Profile;
