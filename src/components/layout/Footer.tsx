import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>BrandXploited</h2>
                        <p className={styles.tagline}>No stock. No risk. Just revenue.</p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h3>Company</h3>
                            <Link href="#">About</Link>
                            <Link href="#">Services</Link>
                            <Link href="#">Contact</Link>
                        </div>
                        <div className={styles.column}>
                            <h3>Socials</h3>
                            <Link href="#">Instagram</Link>
                            <Link href="#">TikTok</Link>
                            <Link href="#">YouTube</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} BrandXploited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
