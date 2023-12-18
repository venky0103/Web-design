import React, { useState } from 'react';

import './Modal.css'

const Modal = ({ isOpen, onClose, onSubmit, email, setEmail, message, setMessage }) => {
    const handleOverlayClick = () => {
        onClose();
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };
    const [emailWarning, setEmailWarning] = useState("");

    const [messageWarning, setMessageWarning] = useState("");

    const formValidate = () => {
        let isValid = true;
        if (!email.match(/@.*\./)) {
            setEmailWarning("show");
            isValid = false;
        } else {
            setEmailWarning("");
        }

        if (message.trim() === "") {
            setMessageWarning("show");
            isValid = false;
        } else {
            setMessageWarning("");
        }
        console.log(email, message)
        return isValid;
    };

    const handleSubmit = (e) => {
        formValidate();
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <dialog open className="modal">
                        <form onSubmit={onSubmit}>
                            <div className="modal-content" onClick={handleContentClick}>
                                <label className='input'>Email:<span className='aestrick'>*</span></label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <span className={`warning ${emailWarning}`}>Your email is invalid</span>
                                <label className='input'>Message:<span className='aestrick'>*</span></label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                                <span className={`warning ${messageWarning}`}>Your message is empty</span>
                                <div className='buttons'>
                                    <button type="submit" className='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
                                    <button type="cancel" className='cancel' onClick={onClose}>
                                        Cancel
                                    </button>
                                    <p>"<span className='aestrick'>*</span>" Denotes required field</p>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>
            )}
        </>
    );
};

export default Modal;
