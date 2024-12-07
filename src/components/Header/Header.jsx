import SnapsLogo from "../SnapsLogo/SnapsLogo";
import "./Header.scss";
import { Link } from "react-router-dom";
import image from "../../assets/images/Filter.svg";

export default function Header({
	isFilterOpen,
	toggleFilterDrawer,
	filterButtonClass,
}) {
	return (
		<div className="header">
			<SnapsLogo />
			<button onClick={toggleFilterDrawer} className={filterButtonClass}>
				<img src={image} alt="Filter icon" />
				{isFilterOpen ? "Filters" : "Filters"}
			</button>
		</div>
	);
}
