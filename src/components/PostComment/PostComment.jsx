import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import GetComment from "../GetComment/GetComment";

export default function PostComment({ photoId }) {
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const URL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=9285edf0-cde3-4470-a45d-c14b7f386fbc`;

		const fetchComments = async () => {
			try {
				const response = await axios.get(URL);
				setComments(response.data);
			} catch (error) {
				setError(error);
				console.error("Error fetching comments:", error);
			}
		};

		fetchComments();
	}, [photoId]);

	const handleAddComment = async (name, comment) => {
		const URL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=9285edf0-cde3-4470-a45d-c14b7f386fbc`;

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

			setComments((prevComments) => [...prevComments, response.data]);
		} catch (error) {
			setError(error);
			console.error("Error posting comment:", error);
		}
		console.log("handleAddComment:", handleAddComment);
	};

	return (
		<section>
			<Form onAddComment={handleAddComment} />

			<GetComment comments={comments} />

			{error && <p>Error: {error.message}</p>}
		</section>
	);
}
