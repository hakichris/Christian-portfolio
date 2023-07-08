import { useState } from 'react';
import Popup from '../Actions/popup';
import '../projectcard-style/card.css';
import mentorimage from '../images/ProjectCardImages/mentorimage.png';
import budgetimage from '../images/ProjectCardImages/Budget app.png';
import recipe from '../images/ProjectCardImages/Recipe.png';

const ProjectCards = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [cards] = useState([
    {
      id: '1',
      image: mentorimage,
      title: 'Mentor booking',
      stacks: ['Ruby', 'Rails', 'React', 'Redux', 'HTML5', 'Unit testing'],
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
      image: '../images/pngwing.com (2).png',
      title: 'my project 4',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],
    },

    {
      id: '5',
      image: '../images/pngwing.com (2).png',
      title: 'my project 5',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],
    },

    {
      id: '6',
      image: '../images/pngwing.com (2).png',
      title: 'my project 6',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],
    },

  ]);

  const togglePopup = (id) => {
    setIsOpen(id);
  };

  return (
    <section>
      <div className="card-container">
        <h1 className="section-title">Check my recent projects</h1>
        <div className="cards">
          {cards.map((card) => (
            <div key={card.id} id={card.id} className="card">
              <img src={card.image} alt="cardimage" className="cardimage" />
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
                <button type="submit"><a href={card.link[0]}>Check source</a></button>
                <button type="submit"><a href={card.link[1]}>Live demo</a></button>
                <button type="submit" onClick={() => togglePopup(card.id)}>
                  View more details
                </button>
              </div>
              {isOpen === card.id && (
                <Popup isOpen={isOpen === card.id} togglePopup={togglePopup} card={card} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
