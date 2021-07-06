import React from "react";
import { Modal } from "./components";

import { EmailModalProvider } from "./contexts/EmailModalProvider";

import "./css/App.css";

const App = () => {
	return (
		<EmailModalProvider>
			<>
				<header className="main-header">
					<div className="logo">Fruit Basket</div>
				</header>
				<main className="content-area">
					<h1>Content Area</h1>
				</main>
				<Modal />
			</>
		</EmailModalProvider>
	);
};

export default App;
