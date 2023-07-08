import { PropTypes } from 'prop-types';
import '../projectcard-style/card.css';

const Popup = ({ card }) => (
  <div className="popup-container">
    <div className="popup-content">
      <img className="popupimage" src={card.image} alt="cardimage" />
      <h1 className="title">{card.title}</h1>
      <p className="">{card.explanation}</p>
      <div className="stacks">
        <ul className="stack">
          <li>{card.stacks[0]}</li>
          <li>{card.stacks[1]}</li>
          <li>{card.stacks[2]}</li>
          <li>{card.stacks[2]}</li>
          <li>{card.stacks[3]}</li>
          <li>{card.stacks[4]}</li>
          <li>{card.stacks[5]}</li>
        </ul>
      </div>
      <div className="btn">
        <button type="submit"><a href={card.link[0]}>Check source</a></button>
        <button type="submit"><a href={card.link[1]}>Live demo</a></button>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Popup;
