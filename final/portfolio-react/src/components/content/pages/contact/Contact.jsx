import React, { useState, useEffect } from 'react';
import Modal from '../../../helpers/modals/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocation, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';


const Contact = ({ darkMode }) => {
    //For theme
    const [cssClass, setCSSClass] = useState('contact');
    useEffect(() => {
        setCSSClass(() => {
            const existingClass = "contact"
            const newClass = darkMode ? existingClass + ' dark' : existingClass + ' light';
            return newClass;
        });
    }, [darkMode]);

    const [isModalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [resEmail, setResEmail] = useState('');
    const [resMessage, setResMessage] = useState('');

    const openModal = () => {
        setResEmail('');
        setResMessage('');
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setMessage('');
        setResEmail(email);
        setResMessage(message);
        closeModal();
    };

    return (
        <div id="contact" className={cssClass}>
            <div className="icon-area">
                <div>
                    {<FontAwesomeIcon icon={faPhone} className='icons' />}
                    <strong className='text-icon'>Phone:</strong> <br /><br />
                    +1-669-236-9712
                </div>
                <div>
                    {<FontAwesomeIcon icon={faLocation} className='icons' />}
                    <strong className='text-icon'>Address:</strong> <br /> <br />
                    808 W, San Carlos Street <br />
                    San Jose, CA-95126
                </div>
                <div>
                    {<FontAwesomeIcon icon={faEnvelope} className='icons' />}

                    <strong className='text-icon'>Email:</strong><br /><br />
                    Kelam.v@northeastern.edu
                </div>
            </div>
            <div className="modal-area">
                <button className='modal-button' onClick={openModal}>Contact here for more Info</button>
                <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} email={email} message={message} setEmail={setEmail} setMessage={setMessage} />
            </div>
            <div className="result-area">
                <p>Thank you for contacting! {resEmail}</p>
                <p>Your message : {resMessage}</p>
            </div>
        </div>
    );
};

export default Contact;
