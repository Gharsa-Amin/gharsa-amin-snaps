import Facebook from '../../assets/images/Facebook.svg'
import Twitter from '../../assets/images/X_twitter.svg'
import Instagram from '../../assets/images/Instagram.svg'
import Pinterest from '../../assets/images/Pinterest.svg'
import SnapsLogo from '../SnapsLogo/SnapsLogo'
import './Footer.scss'; 

export default function Footer(){
    return <section className = "footer-section"> 
     <div className='footer-header__desktop'><SnapsLogo/></div>
    <div className='footer-container'>
    <div className='footer-wrapper'>
    <h3 className = "footer-section__header">
        <SnapsLogo />
        </h3> 
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
}

function FooterFacebook(){
return <article className="footer-section__socials">
<img className='footer-section__socials-icons' src={Facebook} alt="facebook logo" />
<img className='footer-section__socials-icons'src={Twitter} alt='Twitter logo' /> 
<img className='footer-section__socials-icons'src={Instagram} alt='Instagram logo' /> 
<img className='footer-section__socials-icons'src={Pinterest} alt='Pinterest logo'/>
</article> 
}
