"use client";

import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Ready To Scale?</h2>
                    <p className={styles.sub}>
                        No more excuses. Let's move some merch.
                    </p>
                </div>

                <Card variant="glass" className={styles.formCard}>
                    <form className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className={styles.group}>
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>

                        <div className={styles.group}>
                            <label>Email</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>

                        <div className={styles.group}>
                            <label>Artist / Band Name</label>
                            <input type="text" placeholder="The Rockers" />
                        </div>

                        <div className={styles.group}>
                            <label>Service Needed</label>
                            <select>
                                <option>Full Merch Management</option>
                                <option>Print Only</option>
                                <option>Design Services</option>
                            </select>
                        </div>

                        <Button variant="primary" size="lg" className={styles.submit}>
                            Launch My Merch Brand 🚀
                        </Button>
                    </form>
                </Card>
            </div>
        </section>
    );
};

export default Contact;
