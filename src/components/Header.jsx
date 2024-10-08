import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <h1 className={styles.logo}>Ihor Kovalevskyi</h1>
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        {/* <li><Link to="/about">About</Link></li> */}
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>                      
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;