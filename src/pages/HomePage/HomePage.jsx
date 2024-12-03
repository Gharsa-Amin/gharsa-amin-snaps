import React, { useState } from "react";
import "./HomePage.scss";
import SnapsLogo from "../../components/SnapsLogo/SnapsLogo";
import Footer from "../../components/Footer/Footer";
import tags from "../../data/tags.json/tags.json";
import PhotosGallery from "../../components/PhotoGallery/PhotoGallery";
import Header from "../../components/MissionStatement/MissionStatement";
import image from "../../assets/images/Filter.svg";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export default function HomePage() {
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
		<main>
			{/* <BrowserRouter>
				<Routes> */}
			<div className="header">
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

				{/* Photo gallery with isFilterOpen passed to determine the layout */}
				<article className="photo-gallery-container">
					<PhotosGallery selectedTag={selectedTag} />
				</article>
			</div>
			<Footer />
			{/* <Route path="*" element={<Not Found />} />
				</Routes>
			</BrowserRouter> */}
		</main>
	);
}
