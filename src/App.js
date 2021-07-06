import React from "react";
import { Modal } from "./components";
import "./css/App.css";

const App = () => {
	return (
		<>
			<header className="main-header">
				<div className="logo">Fruit Basket</div>
			</header>
			<main className="content-area">
				<h1>Content Area</h1>
			</main>
			<Modal />
		</>
	);
};

export default App;
