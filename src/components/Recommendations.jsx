import '../CSS/recommendation.css';
import imagine from '../images/recommenation/imagine_recommendation.png';

function Recommendation() {
  const cards = [
    {
      image: imagine,
      title: 'Security Engineer',
      companyName: 'Imagine Fellowship',
      link: 'https://drive.google.com/file/d/1wAA08oKFlJTUkaCmYavgHI284OMXuok1/view?usp=sharing',
    },
  ];

  return (
    <div className="recommendation">
      <div className="recommendation-content">
        {cards.map((card) => (
          <div key={card.id} id={card.id} className="recommendation">
            <div className="recomm-content">
              <img src={card.image} alt="" />
              <h1>{card.title}</h1>
            </div>
            <a href={card.link} rel="noreferrer" target="_blank">
              View recommendation letter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
