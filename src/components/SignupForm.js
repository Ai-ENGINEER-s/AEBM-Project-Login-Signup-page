// SignupForm.js

import React from 'react';
import '../styles-of-components/SignupForm.css'; // Import your CSS file
import cartaembm from '../assets/cartaembm.png'; // Import your image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SignupForm = () => {
  return (
    <div className="signup-form-container">
      <div className="signup-image-section">
        <img src={cartaembm} alt="Your Image Alt Text" />
      </div>

      <div className="signup-form-section">
        <h2>Inscription</h2>
        <div className="signup-bar-below-header"></div> {/* White bar below header */}

        <form className="signup-form">
          <div className="signup-form-group">
            <label htmlFor="name" className="signup-label">Entrer votre nom:</label>
            <input type="text" id="name" name="name" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label htmlFor="lastName" className="signup-label">Entrer votre prénom:</label>
            <input type="text" id="lastName" name="lastName" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label htmlFor="phoneNumber" className="signup-label">Entrer votre numéro:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label htmlFor="email" className="signup-label">Entrer votre email:</label>
            <input type="email" id="email" name="email" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label htmlFor="password" className="signup-label">Entrer votre mot de passe:</label>
            <input type="password" id="password" name="password" className="signup-input" required />
          </div>

          <div className="signup-form-group">
            <label htmlFor="confirmPassword" className="signup-label">Confirmer votre mot de passe:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="signup-input" required />
          </div>

          <button type="submit" className="signup-button">Me connecter</button>
        </form>



        <div className="signup-social-buttons">
        <p>ou s'enregistrer avec</p>
        <button className="google-signup">
            <FontAwesomeIcon icon={faGoogle} /> Google
          </button>
          <button className="facebook-signup">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
