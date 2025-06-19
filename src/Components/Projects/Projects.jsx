import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Samadhan from '../../assets/samadhanmithra.png';
import ATS from '../../assets/ats.png';
import TicTacToe from '../../assets/tic-tac-toe.png';
import './Projects.css';

function Projects() {
  const [isLastPage, setIsLastPage] = useState(false);
  const [positionClass, setPositionClass] = useState(false);
  const bookRef = useRef();

  const projectData = [
    {
      id: 1,
      title: "CAMPUS NAVIGATION SYSTEM",
      description: "An interactive college navigation system built using React, Spring Boot, and PostgreSQL. It allows students, faculty, and visitors to easily locate blocks, departments, and other facilities on campus using a searchable map interface. Users can search for places, view descriptions, and get guided navigation within the campus. Admins can manage map data through a secure dashboard. This system improves campus accessibility and offers a user-friendly way to explore the college layout.",
      image: "",
      createdDate: "08/2024",
      gitLink: "https://github.com/SuprijaDevi/Compus-CNS"
    },
    {
      id: 2,
      title: "SAMADHANMITHRA",
      description: "Our Incentives-Based Website aims to streamline the onboarding of legal service providers by offering a platform that rewards them for joining and contributing to our network. Legal professionals can register, showcase their expertise, and gain access to a wide client base. As an incentive, they earn points and benefits for each milestone achieved, such as completing their profile, receiving positive client reviews, and participating in community events. These rewards can be redeemed for premium services, increased visibility, and other perks. This approach not only motivates legal experts to join but also ensures a high-quality and engaged community, benefiting both providers and clients",
      image: Samadhan,
      createdDate: "12/2023",
      gitLink: "https://github.com/SuprijaDevi"
    },
    {
      id: 3,
      title: "TIC TAC TOE",
      description: "This project is a fully responsive Tic Tac Toe game developed using HTML, CSS, and JavaScript, designed for an engaging and interactive user experience across all devices. The game features a sleek and intuitive interface that adapts seamlessly to both desktop and mobile screens. Players take turns marking X and O on a 3×3 grid, with the game automatically detecting winning conditions or draws. A unique feature of this game is the inclusion of background music and sound effects that enhance gameplay. Users can toggle sound on or off with a dedicated music control button. Additionally, celebratory animations play when a player wins, adding visual appeal to the experience.",
      image: TicTacToe,
      createdDate: "06/2024",
      gitLink: "https://github.com/SuprijaDevi/Tic-Tac-Toe"
    },
    {
      id: 4,
      title: "APPLICATION TRACKING SYSTEM",
      description: " Workloom is a cutting-edge platform designed to help you track and optimize your resume for landing your dream job. By analyzing your resume against job listings from top companies, Workloom provides personalized feedback to enhance your application. It keeps you updated on the status of your applications, highlighting areas for improvement and offering tips to increase your chances of success. With a focus on goal-oriented progress, Workloom ensures you stay on top of your job search, making the journey to your dream company structured and efficient. Start using Workloom today and take a step closer to your ideal career.",
      image: ATS,
      createdDate: "1/2024",
      gitLink: "https://github.com/SuprijaDevi/Application-Tracking-System"
    }
  ];

  const handleFlip = (e) => {
    const currentPage = e.data;
    const totalPages = bookRef.current.pageFlip().getPageCount();
  
    if (currentPage === 0) {
      setPositionClass('center');
      setIsLastPage(false);
    } else if (currentPage === totalPages - 1) {
      setPositionClass('right-end'); 
      setIsLastPage(true);
    } else {
      setPositionClass('shift-right');
      setIsLastPage(false);
    }
  };

  return (
    <div className="project" id="projectt">
      <div className="project-title">
        <h2>My Works</h2>
      </div>
      <div className="project-book">
        <HTMLFlipBook
          ref={bookRef}
          width={320}
          height={280}
          maxShadowOpacity={0.5}
          drawShadow={true}
          showCover={true}
          size="stretch"
          onFlip={handleFlip}
          className={`flipbook ${positionClass} ${isLastPage ? 'last-page' : ''}`}
        >
          {/* Cover Page */}
          <div className="page" style={{ background: 'transparent' }}>
            <div className="page-content cover">
              <img 
                src="https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid&w=740" 
                alt="Album Cover" 
                className="project-logo" 
              />
              <h2>Project Album</h2>
              <p>Flip through my creations!</p>
            </div>
          </div>

          {/* Project Pages */}
          {projectData.map((project) => (
            <div className="page" key={project.id}>
              <div className="page-content">
                <div className="project-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                  />
                  <div className="project-info">
                    <h2 className="project-name">{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <p className='project-date'>Created: {project.createdDate}</p>
                    <p className="project-gitlink">
                      GitHub: {project.gitLink && (
                        <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                          {project.gitLink}
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div className="page">
            <div className="page-content cover">
              <h1>End of Album!</h1>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default Projects;