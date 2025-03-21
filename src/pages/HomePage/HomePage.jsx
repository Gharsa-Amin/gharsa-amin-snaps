import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import PhotosGallery from "../../components/PhotoGallery/PhotoGallery";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import axios from "axios";
import Header from "../../components/Header/Header";
export default function HomePage() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedTag, setSelectedTag] = useState(null);
	const [tags, setTags] = useState();

	useEffect(() => {
		const fetchFilters = async () => {
			const URL = "http://localhost:8080/tags";
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
			<Header
				isFilterOpen={isFilterOpen}
				toggleFilterDrawer={toggleFilterDrawer}
				filterButtonClass={filterButtonClass}
			/>
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
				<article className="photo-gallery-container">
					<PhotosGallery selectedTag={selectedTag} />
				</article>
			</div>
		</main>
	);
}
