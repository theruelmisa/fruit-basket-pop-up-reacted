import React, { useContext, useState } from "react";
import Cookies from "js-cookie";

export const StateContext = React.createContext();

export const useStateContext = () => useContext(StateContext);

export const EmailModalProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(false);
	const [email, setEmail] = useState("");
	const [invalidInput, setInvalidInput] = useState(false);

	const handleOpenModal = () => {
		Cookies.set("modalOpenedBefore", true, { expires: 7 });
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const handleEmailValidation = (e) => {
		const emailIsValid = (email) => {
			return /\S+@\S+\.\S+/.test(email);
		};

		setInvalidInput(emailIsValid);
	};

	const removeFeedback = (e) => {
		setInvalidInput(false);
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
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
