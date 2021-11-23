import React, { useState } from "react";
import { Context } from "../store/appContext.js";

//create your first component

function ContactList(props) {
	const { contacts, removeContact } = React.useContext(Context);

	const [isShownHoverContent, setIsShownHoverContent] = useState(null);

	return contacts.map(contact => (
		<div
			className="d-flex"
			key={contact.id}
			onMouseEnter={() => setIsShownHoverContent(contact.id)}
			onMouseLeave={() => setIsShownHoverContent(null)}>
			<div className="p-2 w-100">
				<ul>
					<li className="list-group-item">{contact.text}</li>
					<li className="list-group-item">{contact.number}</li>
				</ul>
			</div>

			<div>
				<i
					onClick={() => removeContact(contact.id)}
					className={
						isShownHoverContent === contact.id
							? "fas fa-times p-2 flex-shrink-1 "
							: "fas fa-times p-2 flex-shrink-1 hide"
					}
				/>
			</div>
		</div>
	));
}

export default ContactList;
