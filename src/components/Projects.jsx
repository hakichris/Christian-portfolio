import { useState } from 'react';
import popup from '../Actions/popup';

const ProjectCards = () => {
  const [cards] = useState([

    {
      id: '1',
      image: './images/pngwing.com (2).png',
      title: 'my project',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: 'skdjlkslks',

    },

    {
      id: '2',
      image: './images/pngwing.com (2).png',
      title: 'my project',
      stacks: ['stack1', 'stack2', 'stack3'],
      explanation: 'Hello chris you are going to build your projects card',
      link: 'skdjlkslks',

    },

  ]);

  return (
    <div>
      <section>
        <div className="card-container">
          <h1 className="section-title"> Check my projects</h1>
          <div className="cards">
            { cards.map((card) => (
              <div key={card.id} className="card">
                <h1>{card.title}</h1>
                <p>{card.explanation}</p>
                <div className="stacks">
                  <ul>
                    <li>{card.stacks[0]}</li>
                    <li>{card.stacks[1]}</li>
                    <li>{card.stacks[2]}</li>
                  </ul>
                </div>
                <button type="submit"> View more details</button>
              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCards;
