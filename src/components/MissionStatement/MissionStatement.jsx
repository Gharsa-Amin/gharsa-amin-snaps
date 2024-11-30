import "./MissionStatement.scss";

export default function Header() {
	return (
		<section className="mission-section">
			<h4 className="mission-section__title">Our mission:</h4>
			<p className="mission-section__paragraph">
				Provide photographers a space to share photos of the neighborhoods they
				cherish,
				<span className="modifier"> expressed in their unique style.</span>
			</p>
		</section>
	);
}
