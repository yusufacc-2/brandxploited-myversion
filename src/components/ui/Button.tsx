"use client";

import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = ({
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
            {...props}
        >
            <span className={styles.content}>{children}</span>
            <span className={styles.glitch}></span>
        </button>
    );
};

export default Button;
