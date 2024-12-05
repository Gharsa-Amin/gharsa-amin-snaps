import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import SnapsLogo from "../../components/SnapsLogo/SnapsLogo";
import Footer from "../../components/Footer/Footer";
import PhotosGallery from "../../components/PhotoGallery/PhotoGallery";
import Header from "../../components/MissionStatement/MissionStatement";
import image from "../../assets/images/Filter.svg";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import axios from "axios";
import { Link } from "react-router-dom";
export default function HomePage() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedTag, setSelectedTag] = useState(null);
	const [tags, setTags] = useState();

	useEffect(() => {
		const fetchFilters = async () => {
			const URL =
				"https://unit-3-project-c5faaab51857.herokuapp.com/tags/?api_key=<9285edf0-cde3-4470-a45d-c14b7f386fbc>";
			try {
				const response = await axios.get(URL);
				console.log(response.data);

				setTags(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchFilters();
	}, []);

	const handleTagClicked = (tag) => {
		setSelectedTag(selectedTag === tag ? null : tag);
	};

	const toggleFilterDrawer = () => {
		setIsFilterOpen((prev) => !prev);
	};
	const filterButtonClass = isFilterOpen ? "filter-cta active" : "filter-cta";

	return (
		<main>
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

				<article className="photo-gallery-container">
					<PhotosGallery selectedTag={selectedTag} />
				</article>
			</div>
			<Footer />
		</main>
	);
}
