"use client";

import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/brandxploited-myversion/images/about.png"
                            alt="BrandXploited Studio"
                            width="800"
                            height="600"
                            className={styles.image}
                        />
                        <div className={styles.overlay}></div>
                    </div>
                </div>
                <div className={styles.textCol}>
                    <h2 className={styles.heading}>The Creative Force Behind Your Brand</h2>
                    <p className={styles.copy}>
                        We help independent artists look established, earn real money, and scale without upfront printing costs or logistics.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNum}>10k+</span>
                            <span className={styles.statLabel}>Orders Shipped</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNum}>50+</span>
                            <span className={styles.statLabel}>Artists Signed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
