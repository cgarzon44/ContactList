import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<form className="text-center mt-5">
		<label>Contact Name:</label>
		<input type="text" />
		<label>Email:</label>
		<input type="text" />
	</form>
);
