import { useState } from "react";

export default function Form() {
	// Correct state initialization
	const [inputName, setInputName] = useState("");
	const [comment, setComment] = useState("");

	const handleChangeName = (event) => setInputName(event.target.value);
	const handleChangeComment = (event) => setComment(event.target.value);

	const isInputNameValid = () => {
		return inputName.length >= 3;
	};

	const isFormValid = () => {
		return inputName.length > 0 && comment.length > 0;
	};

	const handleChangeSubmit = (event) => {
		event.preventDefault();

		if (isFormValid()) {
			alert("Form submitted successfully!");
		} else {
			alert("Failed to submit form. Please fill out both fields.");
		}
	};
	return (
		<>
			<form onSubmit={handleChangeSubmit}>
				<div>
					<label>Name</label>
					<input
						type="text"
						name="name"
						onChange={handleChangeName}
						value={inputName}
					/>
				</div>
				<div>
					<label>Comment</label>
					<textarea
						name="comment"
						onChange={handleChangeComment}
						value={comment}
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</>
	);
}
