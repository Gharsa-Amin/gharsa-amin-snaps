import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import GetComment from "../GetComment/GetComment";

export default function PostComment({ photoId, getComments }) {
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(null);

	const handleAddComment = async (name, comment) => {
		// const URL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=9285edf0-cde3-4470-a45d-c14b7f386fbc`;
		const URL =
			"http://localhost:8080/photos/6be619d5-de2c-4f62-ac1b-bd2e36d71ab9/comments";
		try {
			const response = await axios.post(
				URL,
				{ name, comment },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			getComments();
		} catch (error) {
			setError(error);
			console.error("Error posting comment:", error);
		}
		console.log("handleAddComment:", handleAddComment);
	};

	return (
		<section>
			<Form onAddComment={handleAddComment} />{" "}
		</section>
	);
}
