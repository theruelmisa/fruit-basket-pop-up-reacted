import React from 'react'

import './Modal.css';

const Modal = () => {
    return (
        <>
            <section className="email-modal email-modal--visible">
                <div className="email-modal__close-btn">
                    <i className="gg-close"></i>
                </div>
                <div className="email-modal__container">
                    <div className="email-modal__info">
                        <div className="logo">
                            Fruit Basket
                        </div>
                        <h2>Don't miss this chance!</h2>
                        <p className="email-modal__message">
                            Join our amazing community of more than 
                            <span className="email-modal__highlight-text"> 
                                300,000 consumers 
                            </span> who love fruits and receive 
                            <span className="email-modal__highlight-text"> 
                                notifications, discounts, and our weekly newsletter. 
                            </span>
                        </p>
                        <div className="email-modal__error-msg">
                            Please enter a valid email.
                        </div>
                        <div className="email-modal__form-group">
                            <input type="text" className="email-modal__input" placeholder="email@mail.com" />
                            <button className="email-modal__button">Send</button>
                        </div>
                        <div className="email-modal__decline-offer">Sorry, I'm not interested</div>
                    </div>
                    <div className="email-modal__side-image">
                        <img src="img/fruits.jpg" alt="fruits" />
                    </div>
                    <div className="email-thank">
                        <div className="email-thank__title">
                            Thank you <span className="email-thank__user"></span>
                        </div>
                        <p className="email-thank__message">
                            Check your email for further instructions. <br />
                            <span className="email-thank__message--emphasis">Welcome to our community!</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal
