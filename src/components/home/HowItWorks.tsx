"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HowItWorks.module.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { id: 1, title: "You Approve Designs", desc: "We finalize the look." },
    { id: 2, title: "Fans Place Orders", desc: "Your store goes live." },
    { id: 3, title: "We Print & Ship", desc: "On-demand execution." },
    { id: 4, title: "You Get Paid", desc: "Monthly payouts directly." },
];

const HowItWorks = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(
            lineRef.current,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            }
        );

        gsap.utils.toArray<HTMLElement>(".step-animation-target").forEach((step, i) => {
            gsap.from(step, {
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: step,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <h2 className={styles.heading}>Money In Motion</h2>
            <div className={styles.timeline}>
                <div className={styles.lineBase}></div>
                <div className={styles.lineFill} ref={lineRef}></div>

                {steps.map((step, i) => (
                    <div key={step.id} className={`${styles.step} step-animation-target ${i % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.marker}>{step.id}</div>
                        <div className={styles.content}>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
