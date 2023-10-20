import "./HomePage.css";
import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function HomePage() {
  return (
    <div>

      <section id = "intro"
         style={ { }}>
        <h1>Apolline Stevenin</h1>
        <h3>développeur web junior</h3>
      </section>

      <section id="presentation">
          <h1>Présentation</h1>
        
          <p>Bonjour ! Je m'appelle Apolline Stevenin, développeur web junior.
            Pendant 10 ans j’ai été cuisinière ce qui m’ as permis d'acquérir de nombreuses compétences comme la rigueur, l’organisation, le sens du détail, la patience et la gestion du stress. <br></br><br></br>
            Après avoir découvert la programmation grâce à codecademy, j’ai suivi une formation de développement web en 6 mois, grâce à l'école Ironhack, me permettant d’apprendre les bases de ce métier et d'acquérir une certification.<br></br>
            Au cours de cette formation j’ai pu mettre en pratique mes connaissances en travaillant sur divers projets que je présente plus bas.
            <br></br><br></br>
            j’aimerais intégrer un poste de développeur Web full stack afin de continuer mon apprentissage.
            <br></br>
            </p>
        
      </section>
      
      <section id="competences">
        <h1>Compétences</h1>
        <div id="compbar">
          <div>
            <h5>HTML</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "85%"}}></div>
            </div>
            <h5>CSS</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "85%"}}></div>
            </div>
            <h5>Bootstrap</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "75%"}}></div>
            </div>
            <h5>Javascript</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "80%"}}></div>
            </div>
            <h5>Node.js</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "60%"}}></div>
            </div>
            <h5>Express.js</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "60%"}}></div>
            </div>
            <h5>MongoDB</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "75%"}}></div>
            </div>
            <h5>Handlebars</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "75%"}}></div>
            </div>
            <h5>React.js</h5>
            <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "15px"}}>
              <div className="progress-bar" style={{width: "60%"}}></div>
            </div>
          </div>
          <div className="cv">
             <img src='./img/cv capture.png' alt="cv"></img>
             <a className="down-cv" target="_blank" href='./img/CV-webdev-junior.pdf' rel="noreferrer" download>
              <p>télécharger cv</p>
             </a>
        </div>
        </div>

      </section>

      <section id="portfolio">
        <h1>Portfolio</h1>


        <MDBCarousel showControls showIndicators
        className="d-flex">
            <MDBCarouselItem
              className='w-50 '
              itemId={1}
              src='./img/portfolio.png'
              alt='portfolio'
            >
              <h5>Mon portfolio</h5>
              <p>Le site sur lequel vous êtes =)</p>
            </MDBCarouselItem>

            <MDBCarouselItem
              className='w-50 '
              itemId={2}
              src='./img/portal.png'
              alt='portal'
            >
              <h5>Portal</h5>
              <a href="https://portal-project.netlify.app/posts" target="_blank" rel="noreferrer">Accéder au site</a>
            </MDBCarouselItem>

            <MDBCarouselItem
              className='w-50 '
              itemId={3}
              src='./img/ironcookimg.png'
              alt='portal'
            >
              <h5>Ironcook</h5>
              <a href="https://splendid-gray-nightingale.cyclic.app/" target="_blank" rel="noreferrer">Accéder au site</a>
            </MDBCarouselItem>

    </MDBCarousel>

      </section>
      <section id="contact">

      <h2>Me contacter</h2>
      <div className="contactlink">
        <div className="mail">
          <p>Vous souhaitez me contacter? Dans ce cas vous pouvez m'envoyer un mail à l'adresse <a href="mailto:apollinecanard@gmail.com">apollinecanard@gmail.com</a> et je veillerai à vous répondre dans les plus brefs délais.</p>
        </div>
        <div>
          <p>Vous pouvez également me retrouver sur les sites suivants !</p>
          
          <div className="linkgit">
              <a href="https://www.linkedin.com/in/stevenin-apolline-b48893246/" target="_blank" rel="noreferrer"><img src='./img/whiteLinkedin.png' alt="linkedin logo"></img></a>
              <a href="https://github.com/ApollineStev" target="_blank" rel="noreferrer"><img src='./img/whiteGithub.png' alt="github logo" /></a>
          </div>
        </div>
      </div>
      
        
      </section>
    </div>
  );
}

export default HomePage;
