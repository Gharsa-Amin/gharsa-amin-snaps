import axios from "axios";
import { useEffect, useState } from "react";
import "./GetComment.scss";

export default function Comments({ comments }) {
	const commentCount = comments.length;
	return (
		<section className="comment-section">
			<p>{commentCount} Comment</p>
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
