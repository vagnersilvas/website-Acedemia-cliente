
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/SocialMedia.scss';

export function SocialMedia() {
    return (
        <>
            <div className="container__header-social__media">
                <ul>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} /> </li>
                    <li><FontAwesomeIcon icon={faInstagram} /> </li>
                </ul>
            </div>
        </>
    )
}