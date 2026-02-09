import styles from "./TrustedBy.module.css";

const brands = [
    "Heartfactor",
    "Frintones",
    "BeatBoy",
    "Concrete Prophets",
    "MAV Records",
    "At The Concert",
    "Heartfactor",
    "Frintones",
    "BeatBoy",
    "Concrete Prophets",
    "MAV Records",
    "At The Concert",
];

const TrustedBy = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.heading}>Trusted By The Underground</h3>
                <div className={styles.marquee}>
                    <div className={styles.track}>
                        {brands.map((brand, i) => (
                            <div key={i} className={styles.brand}>
                                {brand}
                            </div>
                        ))}
                        {/* Duplicate for loop */}
                        {brands.map((brand, i) => (
                            <div key={`dup-${i}`} className={styles.brand}>
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
