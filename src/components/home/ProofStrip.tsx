import styles from "./ProofStrip.module.css";

const stats = [
    { label: "100% ROI", sub: "earned by all signed artists" },
    { label: "24/7 Fulfilment", sub: "handled end-to-end" },
    { label: "+210% Revenue", sub: "average merch uplift" },
    { label: "100% ROI", sub: "earned by all signed artists" },
    { label: "24/7 Fulfilment", sub: "handled end-to-end" },
    { label: "+210% Revenue", sub: "average merch uplift" },
];

const ProofStrip = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.track}>
                {stats.map((stat, i) => (
                    <div className={styles.card} key={i}>
                        <div className={styles.value}>{stat.label}</div>
                        <div className={styles.sub}>{stat.sub}</div>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {stats.map((stat, i) => (
                    <div className={styles.card} key={`dup-${i}`}>
                        <div className={styles.value}>{stat.label}</div>
                        <div className={styles.sub}>{stat.sub}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProofStrip;
