import { useState } from "react";
import "./form.scss";

export default function Form({ onAddComment }) {
	const [inputName, setInputName] = useState("");
	const [comment, setComment] = useState("");

	const handleChangeName = (event) => setInputName(event.target.value);
	const handleChangeComment = (event) => setComment(event.target.value);

	const isFormValid = () => {
		return inputName.length > 0 && comment.length > 0;
	};

	const handleChangeSubmit = (event) => {
		event.preventDefault();

		if (isFormValid()) {
			if (typeof onAddComment === "function") {
				onAddComment(inputName, comment);
			} else {
				console.error("onAddComment is not a function");
			}

			setInputName("");
			setComment("");
			alert("Form submitted successfully!");
		} else {
			alert("Failed to submit form. Please fill out both fields.");
		}
	};

	return (
		<form onSubmit={handleChangeSubmit}>
			<div>
				<label className="form-label">Name</label>
				<input
					className="form-input"
					type="text"
					name="name"
					onChange={handleChangeName}
					value={inputName}
				/>
			</div>
			<div>
				<label className="form-label">Comment</label>
				<textarea
					className="form-textarea"
					name="comment"
					onChange={handleChangeComment}
					value={comment}
				/>
			</div>
			<div className="form-button">
				<button className="form-button__content" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
}
