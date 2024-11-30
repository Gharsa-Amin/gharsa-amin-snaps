import "./FilterPanel.scss";

const DynamicEventHandler = ({ tags, handleTagClicked, selectedTag }) => {
	return (
		<>
			<h2 className="filter-drawer__headers">Filters</h2>
			<div className="filter-drawer__content">
				<h2 className="filter-drawer__header">Filters</h2>
				{tags.map((tag) => (
					<button
						onClick={() => handleTagClicked(tag)}
						key={tag}
						className={tag === selectedTag ? "selected" : ""}
					>
						{tag}
					</button>
				))}
			</div>
		</>
	);
};

export default DynamicEventHandler;
