import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inscription</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="signupForm.ControlInput1">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupForm.ControlInput2">
            <Form.Label>Adresse e-mail</Form.Label>
            <Form.Control type="email" placeholder="nom@exemple.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupForm.ControlInput3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button
          variant="primary"
          onClick={handleClose}
          style={{
            backgroundColor: '#1B4242',
            borderColor: '#1B4242',
          }}
        >
          S'inscrire
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
