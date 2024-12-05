import SnapsLogo from "../SnapsLogo/SnapsLogo";
import "./Footer.scss";
import FooterFacebook from "../FooterSocial/FooterSocial";

export default function Footer() {
	return (
		<section className="footer-section">
			<div className="footer-header__desktop">
				<SnapsLogo />
			</div>
			<div className="footer-container">
				<div className="footer-wrapper">
					<div className="footer-section__header">
						<SnapsLogo />
					</div>
					<div className="footer-section__mission">
						<p className="footer-section__mission-item">For photographers</p>
						<p className="footer-section__mission-item">Hire talent</p>
						<p className="footer-section__mission-item">Inspiration</p>
					</div>

					<div className="footer-section__about">
						<p className="footer-section__about-item">About</p>
						<p className="footer-section__about-item">Careers</p>
						<p className="footer-section__about-item">Support</p>
					</div>
				</div>
				<FooterFacebook />
			</div>
			<section className="copy-rights">
				<p className="copy-rights__paragraph">© 2024 Snaps</p>
				<p className="copy-rights__paragraph">Terms</p>
				<p className="copy-rights__paragraph">Privacy</p>
				<p className="copy-rights__paragraph">Cookies</p>
			</section>
		</section>
	);
}
