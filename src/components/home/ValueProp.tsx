"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ValueProp.module.css";

gsap.registerPlugin(ScrollTrigger);

const ValueProp = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(textRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }).from(
            imageRef.current,
            {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.8"
        );

        // continuous floating animation
        gsap.to(imageRef.current, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // 3D rotation effect on scroll
        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            rotateY: 15,
            rotateX: 5,
            ease: "none"
        });

    }, []);

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.container}>
                <div className={styles.content} ref={textRef}>
                    <h2 className={styles.heading}>
                        Your Merch Brand <span className={styles.highlight}>Creation Partner</span>
                    </h2>
                    <p className={styles.description}>
                        Empowering musicians to earn real revenue from their brand value —
                        without upfront costs or headaches. We handle the heavy lifting while you focus on the music.
                    </p>
                    <div className={styles.statTag}>
                        <span className={styles.tagValue}>Zero</span>
                        <span className={styles.tagLabel}>Upfront Cost</span>
                    </div>
                </div>
                <div className={styles.visual} ref={imageRef}>
                    <div className={styles.glow}></div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/hoodie.png"
                            alt="Floating Hoodie Mockup"
                            width={600}
                            height={600}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
