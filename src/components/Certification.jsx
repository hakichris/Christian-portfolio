import '../CSS/certification.css';
import foundation from '../images/certification/foundation.png';
import network from '../images/certification/networks.png';
import sql from '../images/certification/SQL.png';
import graduation from '../images/certification/graduation.png';
import microverse from '../images/certification/Microverse.png';
import asset from '../images/certification/Asset.png';
import Leadership from '../images/certification/leadership.png';
import Entrepreneurship from '../images/certification/Entrepreneurship.png';
import kreativstorm from '../images/certification/kreativstormP.png';
import managesecurity from '../images/certification/managesecurity.png';

function Certification() {
  const cards = [
    {
      id: 0,
      image: graduation,
      title: 'Bsc. Computer engineering from Ashesi University',
      skills: ['Computer Science', 'Leadership', 'Engineering'],
      explanation: 'I learned to design, build, and secure computing systems by integrating hardware, software, and problem-solving skills to address real-world challenges.',
      link: 'https://drive.google.com/file/d/1w1T_QPEkPWTpabuz4ma9FemyGAMAL-_6/view?usp=sharing',
    },
    {
      id: 1,
      image: foundation,
      title: 'Foundation of Cybersecurity',
      skills: ['Cybersecurity', 'Information Security (INFOSEC)', 'NIST Cybersecurity Framework (CSF)'],
      explanation:
        'I gain insight into the skills needed for a cybersecurity analyst, the impact of security attacks on businesses, and the tools used for threat detection and defense.',
      link: 'https://coursera.org/share/05f39293d272000f4df170fdcec4d84d',
    },
    {
      id: 2,
      image: managesecurity,
      title: 'Manage Security Risks',
      skills: ['Security Audits', 'Incident Response Playbooks', 'NIST Risk Management Framework (RMF)'],
      explanation: 'I gain insight into assessing business operation threats and vulnerabilities, explore security frameworks for protection, and utilize playbooks for threat response.',
      link: 'https://coursera.org/share/040b94f7f3deee907fcaf01bdc0125cf',
    },
    {
      id: 3,
      image: network,
      title: 'Network and Network Security',
      skills: ['Security Hardening', 'Network Security', 'Cloud Networks'],
      explanation: 'I gain insight into network types and components, data transmission methods, security measures against intrusions, and system hardening techniques.',
      link: 'https://coursera.org/share/ea736f7a9a6c13f7a31b4183e2d90a27',
    },

    {
      id: 4,
      image: sql,
      title: 'Linux & SQL',
      skills: ['SQL', 'Linux', 'Bash'],
      explanation: 'I learned how operating systems interact with applications and hardware, how to navigate the Linux file system using Bash, and how to retrieve data using SQL.',
      link: 'https://coursera.org/share/4d6a787c89a58112f522aff41ac81984',
    },

    {
      id: 5,
      image: asset,
      title: 'Assets, Threats, Vulnerability',
      skills: ['Vulnerability assessment', 'Cryptography', 'Threat analysis'],
      explanation: 'I learned how to analyze an attack surface for risks and vulnerabilities, identify threats like social engineering and malware, and summarize the threat modeling process.',
      link: 'https://coursera.org/share/1f622ef8d1ca3f78c421d8b755889a77',
    },

    {
      id: 6,
      image: kreativstorm,
      title: 'Cybersecurity Hands-on training at Kreativstorm company',
      skills: ['Ethical hacking', 'Website penetration', 'CTF challenges'],
      explanation: 'Rephrase this for cybersecurity training: I learned to ethically penetrate websites with real life problem, set up a hacking lab, solve 20+ CTF challenges, and Protect against attack.',
      link: 'https://credsverse.com/credentials/3df1b203-7561-4d3f-8227-c9053c1e4d4d',
    },

    {
      id: 7,
      image: microverse,
      title: 'Full stack web development',
      skills: ['Full Stack Software Development', 'Professional Skills', 'Remote pair programming'],
      explanation: 'I spent 1300+ hours mastering algorithms, data structures, and while simultaneously developing projects with Ruby, Rails, JavaScript, React/Redux',
      link: 'https://www.coursera.org/account/accomplishments/verify/G4T44V01APLS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },

    {
      id: 9,
      image: Entrepreneurship,
      title: 'Mentorship Program in Entrepreneurship',
      skills: ['Pitching', 'Business development', 'Entrepreneurship'],
      explanation: 'I spent over 20 hours developing a strategically designed business idea, focusing on business development, to present to potential investors.',
      link: 'https://drive.google.com/file/d/1MQBACLYPqhqF29kj3ANrTrBBSznRQ_rr/view?usp=sharing',
    },

    {
      id: 10,
      image: Leadership,
      title: 'Exercising Leadership: Foundational Principles',
      skills: ['Leading in emerging economy', 'Critical thinking', 'Ethical leadership'],
      explanation: 'I learned to lead in emerging economies, think critically, and apply ethical leadership principles.',
      link: 'https://courses.edx.org/certificates/d3b77df774d24096802c37a6e60b6ba9?_gl=1*1xl5c4q*_gcl_au*MTQ2MDE1MjM4LjE3MzkwMTI0NTA.*_ga*OTcxMDA3MzUuMTczOTAxMjQ1MQ..*_ga_D3KS4KMDT0*MTc0MTQzMTQ4NS4yLjEuMTc0MTQzMTg4Mi42MC4wLjA.',
    },
  ];

  return (
    <div className="certifications">
      <div className="certifications-content">
        {cards.map((card) => (
          <div key={card.id} id={card.id} className="certification">
            <div className="certcard-content">
              <img src={card.image} alt="" />
              <h1>{card.title}</h1>
              <ul>
                <li>{card.skills[0]}</li>
                <li>{card.skills[1]}</li>
                <li>{card.skills[2]}</li>
              </ul>
              <p>{card.explanation}</p>
            </div>
            <a href={card.link} rel="noreferrer" target="_blank">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
