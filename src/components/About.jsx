import '../CSS/aboutme.css';

const About = () => (
  <div className="about">
    <div className="aboutmevideo">
      <h1>About me</h1>
      <iframe
        className="youtubevideo"
        src="https://www.youtube.com/embed/7WU__JQuB8g"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export default About;
