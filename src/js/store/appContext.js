import React, { useState, useEffect } from "react";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

export const withGlobalState = ComponentToBeWrapperd => {
	const ComponentToBeReturned = () => {
		const [contacts, setContact] = React.useState([]);

		const removeContact = id => {
			const removeArr = contacts.filter(contact => contact.id !== id);

			setContact(removeArr);
		};

		const addContact = contact => {
			if (!contact.text || /^\s*$/.test(contact.text)) {
				return;
			}
			const newContacts = [contact, ...contacts];

			setContact(newContacts);
		};

		const ContextValue = { contacts, removeContact, addContact };
		return (
			<Context.Provider value={ContextValue}>
				<ComponentToBeWrapperd />
			</Context.Provider>
		);
	};

	return ComponentToBeReturned;
};
