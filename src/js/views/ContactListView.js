import React, { useState, useEffect, useContext } from "react";

import "../../styles/demo.scss";
import { Context } from "../store/appContext.js";
import ContactList from "../component/ContactList.js";

export const ContactListView = () => {
	return (
		<>
			<ContactList />
		</>
	);
};
