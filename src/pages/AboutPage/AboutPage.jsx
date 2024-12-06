import React from "react";
import { useParams } from "react-router-dom";
import PhotoDetails from "../../components/PhotoDetails/PhotoDetails";
import "./AboutPage.scss";
import GetComment from "../../components/GetComment/GetComment";
import PostComment from "../../components/PostComment/PostComment";

export default function AboutPage() {
	const { id } = useParams();

	return (
		<div className="about-page">
			<PhotoDetails photoId={id} />
			<PostComment photoId={id} />
			<GetComment photoId={id} />
		</div>
	);
}
