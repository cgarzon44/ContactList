import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//create your first component

function AddContact(props) {
	const [input, setInput] = useState("");
	const [inputNumber, setInputNumber] = useState("");

	const handleChange = e => {
		setInput(e.target.value);
	};
	const handleChangeNumber = e => {
		setInputNumber(e.target.value);
	};

	const inputRef = useRef(null);
	const inputNumberRef = useRef(null);

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input,
			number: inputNumber
		});

		setInput("");
		setInputNumber("");
	};

	return (
		<form
			className=" custom-container row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center"
			onSubmit={handleSubmit}>
			<div className=" row align-items-center justify-content-center">
				<div className="col">
					<label>New Contact: </label>
					<input
						type="text"
						value={input}
						className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
						onChange={handleChange}
						ref={inputRef}
					/>
				</div>
				<label>Phone Number: </label>
				<input
					type="text"
					value={inputNumber}
					className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
					onChange={handleChangeNumber}
					ref={inputNumberRef}
				/>

				<div className="col-auto px-0 mx-0 mr-2">
					<button onClick={handleSubmit} type="button" className="btn btn-primary">
						Add
					</button>
				</div>
			</div>
		</form>
	);
}

AddContact.propTypes = {
	onSubmit: PropTypes.onSubmit
};

export default AddContact;
