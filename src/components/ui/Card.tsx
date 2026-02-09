import React, { HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "glass" | "solid" | "cyber";
    children: React.ReactNode;
}

const Card = ({
    variant = "glass",
    className = "",
    children,
    ...props
}: CardProps) => {
    return (
        <div
            className={`${styles.card} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
