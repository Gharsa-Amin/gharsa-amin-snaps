import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../Form/Form";

export default function PostComment({ photoId, getComments }) {
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(null);

	const handleAddComment = async (name, comment) => {
		const URL = `http://localhost:8080/photos/${photoId}/comments`;
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
