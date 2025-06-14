import HeaderStyle from './style/Header.module.css'

var Header = () => {
    return (
        <div className={HeaderStyle.header}>
            <div className={HeaderStyle.mainContainer}>
                <span className={HeaderStyle.logo}>Parking Finder</span>
                <ul className={HeaderStyle.navbar}>
                    <li className={HeaderStyle.navItem}>Home</li>
                    <li className={HeaderStyle.navItem}>About</li>
                    <li className={HeaderStyle.navItem}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header