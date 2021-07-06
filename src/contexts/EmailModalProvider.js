import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export const useStateContext = () => useContext(StateContext);

export const EmailModalProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<StateContext.Provider value={{ openModal }}>
			{children}
		</StateContext.Provider>
	);
};
