import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Connexion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
            <Form.Label>Adresse e-mail</Form.Label>
            <Form.Control type="email" placeholder="nom@exemple.com" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginForm.ControlInput2">
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
          Connexion
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
