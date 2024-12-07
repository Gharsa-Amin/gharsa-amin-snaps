import axios from "axios";
import { useEffect, useState } from "react";
import "./GetComment.scss";

export default function Comments({ comments }) {
	// const [comments, setComments] = useState([]);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	const getComments = async () => {
	// 		console.log(photoId);
	// 		const URL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=9285edf0-cde3-4470-a45d-c14b7f386fbc`;
	// 		try {
	// 			const response = await axios.get(URL);
	// 			console.log(response.data);
	// 			setComments(response.data);
	// 		} catch (error) {
	// 			setError(error);
	// 			console.error("Error fetching comments:", error);
	// 		}
	// 	};

	// 	getComments();
	// }, [photoId]);

	return (
		<section className="comment-section">
			{comments.map((comment) => (
				<div key={comment.id} className="comment-item">
					<div className="comment-item__wrapper">
						<p className="comment-item__author">{comment.name}</p>
						<p className="comment-item__time">
							{new Date(comment.timestamp).toLocaleDateString()}
						</p>
					</div>
					<p className="comment-item__comment">{comment.comment}</p>
				</div>
			))}
		</section>
	);
}
