import "./PhotoGallery.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function PhotoGallery({ selectedTag }) {
	const [photos, setPhotos] = useState([]);
	const filteredPhotos = selectedTag
		? photos.filter((photo) => photo.tags.includes(selectedTag))
		: photos;

	useEffect(() => {
		const fetchPhotos = async () => {
			const URL =
				"https://unit-3-project-c5faaab51857.herokuapp.com/photos/?api_key=<9285edf0-cde3-4470-a45d-c14b7f386fbc>";
			try {
				const response = await axios.get(URL);
				console.log(response.data);

				setPhotos(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchPhotos();
	}, []);

	return (
		<section className="photo-gallery">
			{filteredPhotos.map((photo) => (
				<article key={photo.id} className="photo-gallery__item">
					<div className="photo-wrapper">
						<img
							src={photo.photo}
							alt={photo.photographer}
							className="photo-gallery__image"
						/>
						<div className="photo-gallery__details">
							<div className="photographer">{photo.photographer}</div>
							{photo.tags.map((tag, index) => (
								<button key={index} className="tag">
									{tag}
								</button>
							))}
						</div>
					</div>
				</article>
			))}
		</section>
	);
}
