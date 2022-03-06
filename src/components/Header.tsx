import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/Header.scss';

export function Header() {
    return (
        <header className="container__header">
            <div className="container__header-logo">
                <div className='image'></div>
                <h2>Studio<span>Performace</span></h2>
            </div>
            <nav className="container__header-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">workSpace</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="container__header-social__media">
                <ul>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} /> </li>
                    <li><FontAwesomeIcon icon={faInstagram} /> </li>
                </ul>
            </div>
        </header>
    )
}