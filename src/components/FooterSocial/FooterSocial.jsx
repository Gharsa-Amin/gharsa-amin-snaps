import Facebook from "../../assets/images/Facebook.svg";
import Twitter from "../../assets/images/X_twitter.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Pinterest from "../../assets/images/Pinterest.svg";

export default function FooterFacebook() {
	return (
		<article className="footer-section__socials">
			<img
				className="footer-section__socials-icons"
				src={Facebook}
				alt="facebook logo"
			/>
			<img
				className="footer-section__socials-icons"
				src={Twitter}
				alt="Twitter logo"
			/>
			<img
				className="footer-section__socials-icons"
				src={Instagram}
				alt="Instagram logo"
			/>
			<img
				className="footer-section__socials-icons"
				src={Pinterest}
				alt="Pinterest logo"
			/>
		</article>
	);
}
