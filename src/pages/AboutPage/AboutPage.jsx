import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import "./AboutPage.scss";
import Comments from "../../components/GetComment/GetComment";
import PostComment from "../../components/PostComment/PostComment";
import NavBar from "../../components/AboutPageNav/AboutPageNav";

export default function AboutPage() {
	const { id } = useParams();
	const [comments, setComments] = useState([]);
	const [error, setError] = useState(null);
	const getComments = async () => {
		// const URL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=9285edf0-cde3-4470-a45d-c14b7f386fbc`;
		const URL = `http://localhost:8080/photos/${id}/comments`;
		try {
			const response = await axios.get(URL);
			const fetchedComments = response.data;
			console.log(response.data);
			setComments(fetchedComments.reverse());
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
			<PostComment photoId={id} getComments={getComments} />
			<Comments comments={comments} />
		</div>
	);
}
