import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PhotoDetails() {
	const [photoDetails, setPhotoDetails] = useState(null);
	const [error, setError] = useState();

	const params = useParams();
	const { id } = params;
	useEffect(() => {
		const URL = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=9285edf0-cde3-4470-a45d-c14b7f386fbc`;

		const mountPhotoDetails = async (params) => {
			try {
				const response = await axios.get(URL);
				setPhotoDetails(response.data);
				console.log(response.data);
			} catch (error) {
				console.error(error);
				setError(error);
			}
		};
		mountPhotoDetails();
	}, [id]);

	if (photoDetails === null) {
		return <>Loading...</>;
	}
	ß;
	return (
		<>
			<section className="photo-gallery">
				{photoDetails.map((photo) => (
					<article key={photo.id} className="photo-gallery__item">
						<div className="photo-wrapper">
							<img
								src={photo.photo}
								alt={photo.photographer}
								className="photo-gallery__image"
							/>
							<div className="photo-gallery__details">
								{photo.tags.map((tag, index) => (
									<button key={index} className="tag">
										{tag}
									</button>
								))}
								<div className="photographer">{photo.photographer}</div>
							</div>
						</div>
					</article>
				))}
			</section>
		</>
	);
}
