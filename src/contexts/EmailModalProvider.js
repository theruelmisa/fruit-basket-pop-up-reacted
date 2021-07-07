import React, { useContext, useState } from "react";
import Cookies from "js-cookie";

export const StateContext = React.createContext();

export const useStateContext = () => useContext(StateContext);

export const EmailModalProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(false);
	const [email, setEmail] = useState("");
	const [invalidInput, setInvalidInput] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	// Modal state handlers
	const handleOpenModal = () => {
		Cookies.set("modalOpenedBefore", true, { expires: 7 });
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setEmail("");
		setInvalidInput(false);
		setOpenModal(false);
	};

	// Email State Handlers
	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	// Input Validation State Handlers
	const handleEmailValidation = (e) => {
		const emailIsValid = (text) => {
			return /\S+@\S+\.\S+/.test(text);
		};

		if (!emailIsValid(email)) {
			setInvalidInput(true);
			return null;
		}

		setInvalidInput(false);
	};

	const removeFeedback = (e) => {
		setInvalidInput(false);
	};

	// Form Completion State Handlers
	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (!invalidInput && email.length > 1) {
			setFormSubmitted(true);
		}
	};

	return (
		<StateContext.Provider
			value={{
				openModal,
				handleOpenModal,
				handleCloseModal,
				email,
				handleEmailInput,
				handleEmailValidation,
				removeFeedback,
				invalidInput,
				formSubmitted,
				formSubmitHandler,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
