import '../CSS/aboutme.css';
import Typewriter from 'typewriter-effect';

const About = () => {
  const handleDownload = () => {
    const resumeUrl = 'https://github.com/hakichris/Christian-portfolio/files/12041819/Christian.resume.software.engineer.pdf'; // Replace with your resume file URL
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Christian hakizimana resume.pdf'; // Replace with the desired filename for the downloaded file
    link.click();
  };

  return (
    <div className="about">
      <div className="aboutmevideo">
        <h1>About me</h1>
        <div>
          <p>
            {' '}
            <Typewriter
              options={{
                strings: ['I code simple, innovative solutions for complex problems',
                  'I love working in teams of diversified people from bottom to top level',
                  'I stand for diversity and inclusion'],
                autoStart: true,
                loop: false,
                deleteSpeed: 10,
              }}
            />
          </p>
        </div>
        <iframe
          className="youtubevideo"
          src="https://www.youtube.com/embed/7WU__JQuB8g/controls=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>
      <div className="download-resume">
        <button type="submit" onClick={handleDownload}>
          Download my Resume
        </button>
      </div>
    </div>
  );
};

export default About;
