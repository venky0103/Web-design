import React from 'react';
import './Modal.css';
import Button from './Button';

function Modal({ isOpen, onClose, onSubmit }) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <dialog open className="modal">
            <div className="modal__content">
            <h2>Register</h2>
            <p>Subscribe for more</p>
            </div>
            <div className="modal__buttons">
            <Button onClick={onClose}>Close Modal</Button>
      <Button type="submit" visual="link" onClick={onSubmit}>
            Submit
       </Button>
       </div>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Modal;