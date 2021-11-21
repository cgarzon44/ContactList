import React, { useState, useEffect, useContext } from "react";

import "../../styles/demo.scss";
import { Context } from "../store/appContext.js";

export const ContactList = () => {
	const { todos } = useContext(Context);

	return (
		<div className="container">
			<div className="jumbotron">
				<img src="" />
				<label>Username:</label>
				<p>Insert Username</p>
				<label>Email: </label>
				<p>{todos}</p>
			</div>
		</div>
	);
};
