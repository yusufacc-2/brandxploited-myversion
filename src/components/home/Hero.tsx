"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../ui/Button";
import styles from "./Hero.module.css";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            textRef.current.querySelectorAll("h1 > span"),
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 0.5 }
        )
            .fromTo(
                textRef.current.querySelector("p"),
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(
                textRef.current.querySelectorAll(".cta-group > *"),
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
                "-=0.6"
            );

    }, []);

    return (
        <section className={styles.hero} ref={containerRef}>
            <div className={styles.videoBg}>
                <div className={styles.overlay}></div>
                {/* Placeholder for video - using aesthetic grain/gradient for now */}
                <div className={styles.grain}></div>
            </div>

            <div className={styles.content} ref={textRef}>
                <h1>
                    <span className={styles.line}>We Build</span>
                    <br />
                    <span className={styles.line}>Your Merch Brand.</span>
                    <br />
                    <span className={`${styles.line} ${styles.highlight}`}>You Keep The Profits.</span>
                </h1>

                <p className={styles.subline}>
                    No stock. No risk. No logistics. Just revenue.
                </p>

                <div className={`cta-group ${styles.actions}`}>
                    <Button variant="primary" size="lg">
                        Get a Quote
                    </Button>
                    <Button variant="outline" size="lg">
                        See How It Works
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
