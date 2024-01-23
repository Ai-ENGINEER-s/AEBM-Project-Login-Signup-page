
import React from 'react';
import '../styles-of-components/Footbar.css';  // Assurez-vous d'importer votre fichier de style CSS

const Footbar = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Adresse</h3>
        <p>20300, Rabat UIC Maroc</p>

        <h3>Email</h3>
        <p>aebm@gmail.com</p>

        <h3>Tel</h3>
        <p>+212 777730540</p>
        <p>+226 74194010</p>
      </div>

      <div className="footer-section">
        <h3>Suivez-nous</h3>
        {/* Ajoutez ici vos icônes ou liens de réseaux sociaux */}

        <h3>Prenez Contact</h3>
        <form>
          <div className="form-group">
            <label htmlFor="lastName">Nom:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Prénom:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet:</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <button type="submit">Envoyez-nous un message</button>
        </form>

        <div className="newsletter-section">
          <h3>Inscrivez-vous pour les actualités de la communauté</h3>
          <form>
            <div className="form-group">
              <label htmlFor="newsletterEmail">Email:</label>
              <input type="email" id="newsletterEmail" name="newsletterEmail" required />
            </div>

            <button type="submit">Soumettre</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footbar;
