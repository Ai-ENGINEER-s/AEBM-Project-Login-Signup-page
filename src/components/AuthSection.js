import React, { useState } from 'react';
import aebm from '../assets/aebm.png';
import '../styles-of-components/AuthSection.css';
import LoginModal from '../service/LoginModal';
import SignupModal from '../service/SignupModal';

const AuthSection = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  const handleSignupModalShow = () => setShowSignupModal(true);
  const handleSignupModalClose = () => setShowSignupModal(false);

  const handleEspaceCompteClick = () => {
    // Logique à exécuter lors du clic sur le bouton Espace Compte
  };

  const handleResteInformeClick = () => {
    // Logique à exécuter lors du clic sur le bouton Resté Informé
  };

  const handleCommuniquerClick = () => {
    // Logique à exécuter lors du clic sur le bouton Communiquer
  };

  const handleSoutienClick = () => {
    // Logique à exécuter lors du clic sur le bouton Soutien
  };

  const handleInscriptionClick = () => {
    // Logique à exécuter lors du clic sur le bouton S'inscrire
  };

  return (
    <div className="auth-section">
      <img src={aebm} alt="AEBM Image" className="aebm-image" />

      <button className="button space-account" onClick={handleEspaceCompteClick}>
        Espace compte
      </button>
      <button className="button reste-informe" onClick={handleResteInformeClick}>
        Resté Informé
      </button>
      <button className="button communiquer" onClick={handleCommuniquerClick}>
        Communiquer
      </button>
      <button className="button soutien" onClick={handleSoutienClick}>
        Soutien
      </button>
      <button className="button signup" onClick={handleSignupModalShow}>
        S'inscrire <span className="icon">&#x1F4E9;</span>
      </button>
      <button className="button login-button" onClick={handleLoginModalShow}>
        Se connecter <span className="icon">&#x1F512;</span>
      </button>

      <LoginModal show={showLoginModal} handleClose={handleLoginModalClose} />
      <SignupModal show={showSignupModal} handleClose={handleSignupModalClose} />
    </div>
  );
};

export default AuthSection;
