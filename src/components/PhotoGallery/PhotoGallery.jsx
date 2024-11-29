import "./PhotoGallery.scss";

import React from "react";
import photos from "../../data/photos.json/photos.json";

export default function PhotosGallery({ selectedTag }) {
	const filteredPhotos = selectedTag
		? photos.filter((photo) => photo.tags.includes(selectedTag))
		: photos;

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
