import '../style/NavBar.scss'

export function NavBar() {
    return (
        <>
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
        </>
    )
}