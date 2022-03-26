import './style.scss';
import { Link } from 'react-router-dom'
export function NavBar() {
    return (
        <>
            <nav className="container__header-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/workspace">workSpace</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}