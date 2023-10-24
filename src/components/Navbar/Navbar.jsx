import "./Navbar.css";


function Navbar() {
  

  return (
    <nav className="d-flex justify-content-between align-items-center fixed-top">
      
        <img src="./img/Asterlight.png" alt="logo.png" />
        
      
      <div className="navChoices">
        <a href="#presentation">Présentation</a>
        <a href="#competences">Compétences</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      
    </nav>
  );
}

export default Navbar;