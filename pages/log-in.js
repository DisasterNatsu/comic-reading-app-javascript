import React from "react";
import styles from "../styles/logIn.module.css";
import { FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

const LogIn = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={`${styles.form} ${styles.signIn}`}>
					<h2>Sign In</h2>
					<div className={styles.inputBox}>
						<input type="text" required="required" />
						<FaRegEnvelope className={styles.icon} />
						<span>Username</span>
					</div>
					<div className={styles.inputBox}>
						<input type="password" required="required" />
						<FiLock className={styles.icon} />
						<span>Password</span>
					</div>
					<div className={styles.inputBox}>
						<input type="submit" value="Log In" />
					</div>
					<p>
						Don't have an account?{" "}
						<a href="/log-in" className={styles.register}>
							Register!
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
