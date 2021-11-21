import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="jumbotron">
				<img src="" />
				<label>Username:</label>
				<p>Insert Username</p>
				<label>Email: </label>
				<p>Insert Email</p>
			</div>
		</div>
	);
};
