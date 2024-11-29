import "./PhotoGallery.scss";

import React from "react";
import photos from "../../data/photos.json/photos.json"; // Ensure this path is correct

export default function PhotosGallery({ selectedTag }) {
	// Filter the photos based on the selected tag
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

// export default function PhotosGallery({ selectedTag }) {
// 	// Filter the photos based on the selected tag
// 	const filteredPhotos = selectedTag
// 		? photos.filter((photo) => photo.tags.includes(selectedTag)) // Only show photos with the selected tag
// 		: photos; // If no tag is selected, show all photos

// 	return (
// 		<section className="photo-gallery">
// 			{filteredPhotos.map((photo) => (
// 				<article key={photo.id} className="photo-gallery__item">
// 					<div className="photo-wrapper">
// 						<img
// 							src={photo.photo}
// 							alt={photo.photographer}
// 							className="photo-gallery__image"
// 						/>
// 						<div className="photo-gallery__details">
// 							<div className="photographer">{photo.photographer}</div>
// 							<div></div>
// 							{photo.tags.map((tag, index) => (
// 								<button key={index} className="tag">
// 									{tag}
// 								</button>
// 							))}
// 						</div>
// 					</div>
// 				</article>
// 			))}
// 		</section>
// 	);
// }

// import React from 'react';
// import photos from '../../data/photos.json/photos.json';  // Adjust path as necessary

// export default function PhotosGallery(){
//     return (
//         <section className='photo-gallery'>
//             {photos.map((photo) => (
//                     <article key={photo.id} className='photo-gallery__item'>
//                     <img src={photo.photo} alt={photo.photographer} className='photo-gallery__image' />
//                     <div className='photo-gallery__details'>
//                         <p className='photographer'>{photo.photographer}</p>
//                         <div>
//                             {photo.tags.map((tag, index) =>
//                             <span key={index} className='tag'>{tag}</span>

//                         )}

//                             )
//                         </div>
//                     </div>

//                     </article>
//                 ) )}

//         </section>
//     );
// }
