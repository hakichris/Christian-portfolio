import { useState } from 'react';
import Popup from '../Actions/popup';
import '../projectcard-style/card.css';

const ProjectCards = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [cards] = useState([
    {
      id: '1',
      image: './images/pngwing.com (2).png',
      title: 'my project 1',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],

    },

    {
      id: '2',
      image: './images/pngwing.com (2).png',
      title: 'my project 2',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],
    },

    {
      id: '3',
      image: './images/pngwing.com (2).png',
      title: 'my project 3',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],
    },

    {
      id: '4',
      image: './images/pngwing.com (2).png',
      title: 'my project 4',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],
    },

    {
      id: '5',
      image: './images/pngwing.com (2).png',
      title: 'my project 5',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: ['github link', 'live links'],
    },

    {
      id: '6',
      image: './images/pngwing.com (2).png',
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
        <h1 className="section-title">Check my projects</h1>
        <div className="cards">
          {cards.map((card) => (
            <div key={card.id} id={card.id} className="card">
              <img src={card.image} alt="cardimage" />
              <h1>{card.title}</h1>
              <div className="stacks">
                <ul>
                  <li>{card.stacks[0]}</li>
                  <li>{card.stacks[1]}</li>
                  <li>{card.stacks[2]}</li>
                </ul>
              </div>
              <div className="btn">
                <button type="submit">Check source</button>
                <button type="submit">Live demo</button>
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
