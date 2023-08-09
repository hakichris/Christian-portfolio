import '../CSS/aboutme.css';
import Typewriter from 'typewriter-effect';

function About() {
  const handleDownload = () => {
    const resumeUrl = 'https://github.com/hakichris/Christian-portfolio/files/12041819/Christian.resume.software.engineer.pdf'; // Replace with your resume file URL
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Christian hakizimana resume.pdf'; // Replace with the desired filename for the downloaded file
    link.click();
  };

  return (
    <div className="about">
      <div className="header">
        <h1>About me</h1>
        <p className="typing-script">
          {' '}
          <Typewriter
            options={{
              strings: ['I code simple, innovative solutions for complex problems',
                'I love working in teams of diversified people from all echelons',
                'I stand for diversity and inclusion'],
              autoStart: true,
              loop: false,
              deleteSpeed: 10,
            }}
          />
        </p>
      </div>
      <div className="content-video-skills">
        <iframe
          className="youtubevideo"
          src="https://www.youtube.com/embed/FEJFxCTcB8Q/controls=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="about-me-buttons">
          <button style={{ marginBottom: '10px', marginTop: '20px' }} type="submit" onClick={handleDownload}>
            Download my Resume
          </button>
          <hr style={{ color: 'green' }} />
          <div className="technologies">
            <div className="technology">
              <button type="submit" className="language">
                Languages
              </button>
              <div className="description">
                <span>JavaScript |</span>
                {' '}
                <span>Ruby |</span>
                {' '}
                <span>C++ |</span>
                {' '}
                <span>Python |</span>
                {' '}
                <span>Java</span>
              </div>
            </div>
            <div className="technology">
              <button type="submit" className="frameworks">
                Frameworks
              </button>
              <div className="description">
                <span>React |</span>
                {' '}
                <span>Rails |</span>
                {' '}
                <span>jQuery |</span>
                {' '}
                <span>NodeJs |</span>
                {' '}
                <span>Vue.js</span>
              </div>
            </div>
            <div className="technology">
              <button type="submit" className="skills">
                Skills
              </button>
              <div className="description">
                <span>Git and GitHub |</span>
                {' '}
                <span>Remote collaboration|</span>
                {' '}
                <span>Rspec and Jest |</span>
                {' '}
                <span>Slack |</span>
                {' '}
                <span>WordPres |</span>
                {' '}
                <span>Fluent in English, French, Swahili |</span>
                {' '}
                <span>webpack |</span>
                {' '}
                <span>RestFul API |</span>
                {' '}
                <span>Front-end and Back-end</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
