import React, { useState } from "react";
import "./App.scss";
import SnapsLogo from "./components/SnapsLogo/SnapsLogo";
import Footer from "./components/Footer/Footer";
import tags from "./data/tags.json/tags.json";
import PhotosGallery from "./components/PhotoGallery/PhotoGallery";
import Header from "./components/Header/Header";
import image from "./assets/images/Filter.svg";
import FilterPanel from "./components/FilterPanel/FilterPanel";

export default function App() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedTag, setSelectedTag] = useState(null);

	const handleTagClicked = (tag) => {
		setSelectedTag(selectedTag === tag ? null : tag);
	};

	const toggleFilterDrawer = () => {
		setIsFilterOpen((prev) => !prev);
	};
	const filterButtonClass = isFilterOpen ? "filter-cta active" : "filter-cta";

	return (
		<>
			<div className="Nav-bar">
				<SnapsLogo />
				<button onClick={toggleFilterDrawer} className={filterButtonClass}>
					<img src={image} alt="Filter icon" />
					{isFilterOpen ? "Filters" : "Filters"}
				</button>
			</div>
			<div className={`app-container ${isFilterOpen ? "is-filter-open" : ""}`}>
				{isFilterOpen && (
					<div className="filter-drawer">
						<FilterPanel
							tags={tags}
							handleTagClicked={handleTagClicked}
							selectedTag={selectedTag}
						/>
					</div>
				)}

				<Header />

				{/* Photo gallery with isFilterOpen passed to control layout */}
				<article className="photo-gallery-container">
					<PhotosGallery selectedTag={selectedTag} />
				</article>
			</div>
			<Footer />
		</>
	);
}

// export default function App() {
// 	const [isFilterOpen, setIsFilterOpen] = useState(false); // Whether the filter drawer is open
// 	const [selectedTag, setSelectedTag] = useState(null); // The currently selected tag

// 	const handleTagClicked = (tag) => {
// 		// If a tag is selected, and the same tag is clicked again, deselect it
// 		if (selectedTag === tag) {
// 			setSelectedTag(null); // Deselect the tag
// 		} else {
// 			setSelectedTag(tag); // Select the new tag
// 		}
// 	};

// 	const toggleFilterDrawer = () => {
// 		setIsFilterOpen((prev) => !prev); // Toggle filter drawer open/close
// 	};
// 	//change Nav-bar to header.
// 	return (
// 		<>
// 			<div className="Nav-bar">
// 				<SnapsLogo />
// 				<button onClick={toggleFilterDrawer} className="filter-cta">
// 					<img
// 						src={image}
// 						alt="Filter icon"
// 						className="filter-icon filter-icon-active"
// 					/>
// 					{isFilterOpen ? "Filters" : "Filters"}
// 				</button>
// 			</div>
// 			{/* Filter drawer */}
// 			{isFilterOpen && (
// 				<div className="filter-drawer">
// 					<FilterPanel
// 						tags={tags}
// 						handleTagClicked={handleTagClicked}
// 						selectedTag={selectedTag} // Pass selectedTag to highlight the active tag
// 					/>
// 				</div>
// 			)}
// 			<Header />
// 			<PhotosGallery selectedTag={selectedTag} />{" "}
// 			{/* Pass selectedTag to filter photos */}
// 			<Footer />
// 		</>
// 	);
// }
