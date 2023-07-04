import { PropTypes } from 'prop-types';
import '../projectcard-style/card.css';

const Popup = ({ card }) => (
  <div className="popup-container">
    <div className="popup-content">
      <img src={card.image} alt="cardimage" />
      <h1>{card.title}</h1>
      <p>{card.explanation}</p>
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
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Popup;
