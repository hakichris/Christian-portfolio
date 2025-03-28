import '../CSS/mainpage.css';
import { AiOutlineMail } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import profile from '../images/profile.jpeg';

function Profile() {
  return (
    <div className="body">
      <div className="home">
        <div className="profiles">
          <img src={profile} className="profilepicture" alt="myprofile" />
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
              a Full-Stack Web Developer and IT Security engineer
              who crafts ingenious solutions for intricate challenges.
            </span>
          </h1>
          <p className="intro-exp">
            with
            <span className="work-hours bold"> 3+ years </span>
            of experience in IT security, Software development and Threat mitigation.
            I have developed
            <span className="work-hours bold"> 15+ </span>
            high-performance web applications while implementing security best practices
            to safeguard applications and infrastructure. My expertise includes
            <span className="mentoring bold"> SIEM monitoring, Firewall management, endpoint security, vulnerability assessment, and incident response. </span>
            Additionally, I have provided cybersecurity training to teams across Africa, Europe,
            and the US, educating
            <span className="mentoring bold"> 50+ professionals </span>
            on risk mitigation and secure coding practices.
            On the development side, I have hands-on experience with React, Python, JavaScript,
            Ruby on Rails,and cloud security (Azure, IAM, SaaS security).
            I am
            <span className="mentoring bold"> fluent in English and French </span>
            and passionate about building secure,
            scalable applications while strengthening organizational cybersecurity defenses.
            {' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
