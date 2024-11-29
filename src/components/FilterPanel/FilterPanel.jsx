import "./FilterPanel.scss";

const FilterPanel = ({ tags, handleTagClicked, selectedTag }) => {
	return (
		<div className="filter-drawer__content">
			<h2 className="filter-drawer__header">Filters</h2>
			{tags.map((tag) => (
				<button
					onClick={() => handleTagClicked(tag)}
					key={tag}
					className={tag === selectedTag ? "selected" : ""} // Add 'selected' class if it's the active tag
				>
					{tag}
				</button>
			))}
		</div>
	);
};

export default FilterPanel;

// change this code. FilterPanel... DynamicEventHandler name to be changed.
