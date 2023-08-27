import '../CSS/mainpage.css';
import { AiOutlineMail } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import profilepicture from '../images/profilepicture.jpeg';

function Profile() {
  return (
    <div className="body">
      <div className="home">
        <div className="profiles">
          <img src={profilepicture} className="profilepicture" alt="myprofile" />
          <ul className="profile-links">
            <li>
              <a href="https://www.linkedin.com/in/hakichris/" rel="noreferrer" target="_blank">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/hakichris" rel="noreferrer" target="_blank">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/hakichris2" rel="noreferrer" target="_blank">Twitter</a>
            </li>
            <li>
              <a href="https://www.facebook.com/christian.hakizimana.1" rel="noreferrer" target="_blank">Facebook</a>
            </li>
          </ul>
          <div className="contact-info">
            <span>Email: Hakizachrist1@outlook.com</span>
            <span>Tel: +257 62 876959</span>
            <button type="submit" className="quick-contact">
              {' '}
              <NavLink className="navlink" to="/Contact">
                {' '}
                <AiOutlineMail size={15} />
                {' '}
                Quick contact
              </NavLink>
              {' '}
            </button>
          </div>
        </div>
        <div className="intro">
          <h1 className="head1">
            Hello! I&apos;m Christian,
            <span className="green-color">
              a full-stack developer who crafts ingenious solutions for intricate challenges.
              Let&apos;s innovate together!
            </span>
          </h1>
          <p className="intro-exp">
            I have a background in developing
            {' '}
            <span className="work-hours bold"> 15+ </span>
            {' '}
            efficient and agile software applications in a global market.
            {' '}
            <span className="work-hours bold"> 2+ years </span>
            {' '}
            of experience, including mentoring
            {' '}
            <span className="mentoring bold">10+</span>
            {' '}
            junior developers to achieve concrete goals on a strict deadline.
            I stand for diversity and inclusion.
            Strong skills include
            {' '}
            <span className="mentoring bold">
              {' '}
              React, Redux, JavaScript, Ruby on Rails, C++, Java, Leadership, Interpersonal skills,
              Remote pair-programming.
            </span>
            {' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
