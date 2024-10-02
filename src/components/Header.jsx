import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <a href="/">
                    <h1 className={styles.logo}>Ihor Kovalevskyi</h1>
                </a>

                <nav className={styles.nav}>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/projects"></a>Projects</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;