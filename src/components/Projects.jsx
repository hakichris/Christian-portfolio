import { useState, useEffect } from 'react';
import AOS from 'aos';
import Popup from '../Actions/popup';
import 'aos/dist/aos.css';
import '../CSS/card.css';
import mentorimage from '../images/ProjectCardImages/mentorimage.png';
import budgetimage from '../images/ProjectCardImages/budget.png';
import recipe from '../images/ProjectCardImages/Recipe.png';
import todolist from '../images/ProjectCardImages/todolist.png';
import conference from '../images/ProjectCardImages/conference.png';
import catalog from '../images/ProjectCardImages/catalog.png';

const ProjectCards = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [cards] = useState([
    {
      id: '1',
      image: mentorimage,
      title: 'Mentor booking',
      stacks: ['Ruby', 'TailwindCSS', 'React', 'Redux', 'Back-end API', 'Docker'],
      explanation: 'Mentor-booking app helps juniors to book meetings and connect with seniors mentors in a specific stack. I designed the back-end API using ruby and also works on reservation for users.',
      link: ['https://github.com/hienphan0111/Mentor-front-end-app', 'https://mentor-app-qxn4.onrender.com/'],

    },

    {
      id: '2',
      image: recipe,
      title: 'E-commerce Restaurant',
      stacks: ['Webpack', 'Javascript', 'Unit testing', 'HTML5', 'RESTful API', 'CSS3'],
      explanation: 'The online restaurant platform allows customers to browse and appreciate the food menu available for ordering',
      link: ['https://github.com/hakichris/E-commerce-Restaurant', 'https://uchenna-ibute.github.io/Working-with-APIs/dist/'],
    },

    {
      id: '3',
      image: budgetimage,
      title: 'Budget tracking App',
      stacks: ['Ruby', 'Rails', 'PostgreSQL', 'HTML5', 'Rspec Unit testing', 'JavaScript'],
      explanation: 'The personal budget application assists users in monitoring and categorizing their transactions',
      link: ['https://github.com/hakichris/Budget', 'https://budget-app-l98w.onrender.com/'],
    },

    {
      id: '4',
      image: todolist,
      title: 'Personal to do list',
      stacks: ['Javascript', 'HTML5', 'CSS3', 'Remote pair-programming', 'Dom manipulation', 'Webpack'],
      explanation: 'A To-Do List app assists users in managing their planned tasks by allowing them to add and remove activities as needed.',
      link: ['https://github.com/hakichris/TO-DO-LIST.github.io', 'https://hakichris.github.io/TO-DO-LIST.github.io/'],
    },

    {
      id: '5',
      image: conference,
      title: 'Real Estate Conference',
      stacks: ['Agile', 'Node.js', 'DOM manupulation', 'Slack', 'GitHub', 'Git'],
      explanation: 'The real estate conference website enables users to access program details, make room reservations, and participate in the conference virtually.',
      link: ['https://github.com/hakichris/RealEstateConferenceRoom', 'https://hakichris.github.io/RealEstateConferenceRoom/'],
    },

    {
      id: '6',
      image: catalog,
      title: 'My catalog',
      stacks: ['Object-oriented programming', 'Ruby', 'Database management', 'Rspec Unit testing', 'MySQL', 'PostgreSQL'],
      explanation: 'The catalog app allows users to record, categorize and organize various items such as music, books, and movies.',
      link: ['https://github.com/hakichris/Catalog-of-my-things', 'https://drive.google.com/file/d/1dGZ8XjP7qJ_J2JurZg3jBi_AEB2kRVEU/view?usp=drive_link'],
    },

  ]);

  const togglePopup = (id) => {
    setIsOpen(id);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="card-container">
        <h1 className="section-title">Check my recent projects</h1>
        <div className="cards">
          {cards.map((card) => (
            <div key={card.id} id={card.id} className="card">
              <div className="imgbox" data-aos="fade-down-left">
                <img src={card.image} alt="cardimage" className="cardimage" loading="lazy" />
              </div>
              <div className="card-content">
                <h1 className="title">{card.title}</h1>
                <div className="stacks">
                  <ul className="stack">
                    <li>{card.stacks[0]}</li>
                    <li>{card.stacks[1]}</li>
                    <li>{card.stacks[2]}</li>
                    <li>{card.stacks[3]}</li>
                    <li>{card.stacks[4]}</li>
                    <li>{card.stacks[5]}</li>
                  </ul>
                </div>

                <div className="btn">
                  <button type="submit"><a href={card.link[0]} target="_blank" rel="noreferrer">Check source</a></button>
                  <button type="submit"><a href={card.link[1]} target="_blank" rel="noreferrer">Live demo</a></button>
                  <button type="submit" onClick={() => togglePopup(card.id)}>
                    View more details
                  </button>
                </div>
                {isOpen === card.id && (
                  <Popup isOpen={isOpen === card.id} togglePopup={togglePopup} card={card} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
