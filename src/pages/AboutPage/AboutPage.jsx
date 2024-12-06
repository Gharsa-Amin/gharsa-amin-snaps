import React from "react";
import { useParams } from "react-router-dom";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import "./AboutPage.scss";
// import Form from "../../components/Form/Form";
import GetComment from "../../components/GetComment/GetComment";
import PostComment from "../../components/PostComment/PostComment";

export default function AboutPage() {
	const { id } = useParams();

	return (
		<div className="about-page">
			{/* Pass the ID as a prop to PhotoDetails */}
			<PhotoDetails photoId={id} />
			<PostComment photoId={id} />
			{/* <Form /> */}
			<GetComment photoId={id} />
		</div>
	);
}
