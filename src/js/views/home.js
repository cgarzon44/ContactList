import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import AddContact from "../component/AddContact";

export const Home = () => {
	const { addContact } = React.useContext(Context);

	return (
		<>
			<AddContact onSubmit={addContact} />
		</>
	);
};
