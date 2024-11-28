import Facebook from '../../assets/images/Facebook.svg'
import Twitter from '../../assets/images/X_twitter.svg'
import Instagram from '../../assets/images/Instagram.svg'
import Pinterest from '../../assets/images/Pinterest.svg'
import SnapsLogo from '../SnapsLogo/SnapsLogo'
import './Footer.scss'; 

export default function Footer(){
    return <section className = "footer-section"> 
    <h3 className = "footer-section__header">{SnapsLogo}</h3> 
    <article className="footer-section__mission">
        <p className="footer-section__mission-item">For photographers</p>
        <p className="footer-section__mission-item">Hire talent</p>
        <p className="footer-section__mission-item">Inspiration</p>
    </article>

    <article className="footer-section__about">
        <p className="footer-section__about-item">About</p> 
        <p className="footer-section__about-item">Careers</p>
        <p className="footer-section__about-item">Support</p>
    </article>
    <FooterFacebook /> 

    </section>
}

function FooterFacebook(){
return <article className="footer-section__socials">
<img src={Facebook} alt="facebook logo" />
<img src={Twitter} alt='Twitter logo' /> 
<img src={Instagram} alt='Instagram logo' /> 
<img src={Pinterest} alt='Pinterest logo'/>
</article> 
}
