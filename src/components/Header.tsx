import { NavBar } from './NavBar';
import { Logo } from './Logo';
import { SocialMedia } from './SocialMedia';


import '../style/Header.scss';

export function Header() {
    return (
        <header className="container__header">
            <Logo/>
            <NavBar/>
            <SocialMedia/>
        </header>
    )
}