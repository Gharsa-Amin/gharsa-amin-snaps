import axios from "axios";
import { useEffect, useState } from "react";

export default function CommentList() {
	const [comments, setComments] = useState();

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const URL =
					"https://unit-2-project-api-25c1595833b2.herokuapp.com/comments/?api_key=9285edf0-cde3-4470-a45d-c14b7f386fbc";
				const response = await axios.get(URL);
				setComments(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchComments();
	}, []);

	return (
		<div>
			{comments.map((comment) => {
				return <Comment name={comment.name} comment={comment.comment} />;
			})}
		</div>
	);
}
