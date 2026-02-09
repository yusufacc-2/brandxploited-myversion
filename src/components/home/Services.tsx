"use client";

import styles from "./Services.module.css";

const services = [
    {
        id: "01",
        title: "Artwork & Design",
        desc: "Album-inspired graphics & Streetwear-grade layouts",
    },
    {
        id: "02",
        title: "Garment Sourcing",
        desc: "Heavyweight blanks & Premium fits only",
    },
    {
        id: "03",
        title: "Click & Print Model",
        desc: "Zero inventory & Instant income",
    },
    {
        id: "04",
        title: "We Print & Ship",
        desc: "You sell & We handle the chaos",
    },
];

const Services = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>Our Services</h2>
                <p>From strategy to execution</p>
            </div>

            <div className={styles.grid}>
                {services.map((service) => (
                    <div key={service.id} className={styles.card}>
                        <div className={styles.number}>{service.id}</div>
                        <h3 className={styles.title}>{service.title}</h3>
                        <p className={styles.desc}>{service.desc}</p>
                        <div className={styles.overlay}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
