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
      
    </div>
  );
}

export default HomePage;
