import Link from "next/link";
import Button from "../ui/Button";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    BrandXploited
                </Link>
                <nav className={styles.nav}>
                    {/* Desktop Nav - could be added later */}
                </nav>
                <Button size="sm" variant="primary" className={styles.cta}>
                    Start Now
                </Button>
            </div>
        </header>
    );
};

export default Header;
