import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import Comments from "../../components/Comments/Comments";
import NewComments from "../../components/NewComments/NewComments";
import NavBar from "../../components/AboutPageNav/AboutPageNav";

export default function AboutPage() {
	const { id } = useParams();
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(null);
	const getComments = async () => {
		const URL = `http://localhost:8080/photos/${id}/comments`;
		try {
			const response = await axios.get(URL);
			const fetchedComments = response.data;
			const sorted = fetchedComments.sort((a, b) => b.timestamp - a.timestamp);
			setComments(sorted);
		} catch (error) {
			setError(error);
			console.error("Error fetching comments:", error);
		}
	};

	useEffect(() => {
		getComments();
	}, [id]);
	return (
		<div className="about-page">
			<NavBar />
			<PhotoDetails photoId={id} />
			<NewComments photoId={id} getComments={getComments} />
			<Comments comments={comments} />
		</div>
	);
}
