import SnapsLogo from "../SnapsLogo/SnapsLogo";
import "./AboutPageNav.scss";
import { Link } from "react-router-dom";
import image from "../../assets/images/Arrow.svg";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<SnapsLogo />
			<div className="nav-bar__logo">
				<img src={image} />
				<Link to="/">
					<h2 className="nav-bar__header">Home</h2>
				</Link>
			</div>
		</div>
	);
}
