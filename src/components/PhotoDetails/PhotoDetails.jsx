import axios from "axios";
import "./PhotoDetails.scss";
import { useState, useEffect } from "react";
import image from "../../assets/images/Like_Outline.svg";

const formatDate = (timestamp) => {
	const date = new Date(timestamp);
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	const year = date.getFullYear();
	return `${month}/${day}/${year}`;
};
export default function PhotoDetails({ photoId }) {
	const [photoDetails, setPhotoDetails] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!photoId) {
			console.log("No photoId provided");
			return;
		}

		const URL = `http://localhost:8080/photos/${photoId}`;

		const fetchPhotoDetails = async () => {
			try {
				const response = await axios.get(URL);

				console.log("API Response:", response.data);

				setPhotoDetails(response.data);
			} catch (error) {
				setError(error);
				console.error("Error fetching photo details:", error);
			}
		};

		fetchPhotoDetails();
	}, [photoId]);

	if (error) {
		return <div>Error loading photo details: {error.message}</div>;
	}

	if (!photoDetails) {
		return <>Loading...</>;
	}
	const formattedDate = formatDate(photoDetails.timestamp);

	return (
		<section className="photo-details">
			<div className="photo-wrapper">
				<img
					src={`http://localhost:8080${photoDetails.photo}`}
					alt={photoDetails.photographer}
					className="photo-gallery__image"
				/>
				<div className="photo-gallery__details">
					{photoDetails.tags.map((tag, index) => (
						<button key={index} className="tag">
							{tag}
						</button>
					))}
					<div className="photo-details__main-wrapper">
						<div className="photo-details__wrapper">
							<div className="photo-details__likes">
								<img
									className="photo-details__image"
									src={image}
									alt="Like icon"
								/>
								{photoDetails.likes} Likes
							</div>
							<div className="photo-details__time">{formattedDate}</div>
						</div>
						<div className="photo-details__info">
							<div className="photo-details__photographer">
								Photo by {photoDetails.photographer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
