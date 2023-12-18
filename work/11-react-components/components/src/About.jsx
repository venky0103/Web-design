import './App.css';
import Modal from './Modal';
import Button from './Button';
import { useState } from 'react';



import Text from './Text';

function About() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    handleCloseModal();
  };
  return (
    <main className="main">
      <Text/>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </main>
  );
}

export default About;