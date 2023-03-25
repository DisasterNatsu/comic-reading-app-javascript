import React from "react";
import styles from "../styles/logIn.module.css";
import { FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

const LogIn = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={`${styles.form} ${styles.register}`}>
					<h2>Sign Up</h2>
					<div className={styles.inputBox}>
						<input type="text" required="required" />
						<FaRegUser className={styles.icon} />
						<span>Username</span>
					</div>
					<div className={styles.inputBox}>
						<input type="text" required="required" />
						<FaRegEnvelope className={styles.icon} />
						<span>Email</span>
					</div>
					<div className={styles.inputBox}>
						<input type="password" required="required" />
						<FiLock className={styles.icon} />
						<span>Create Password</span>
					</div>
					<div className={styles.inputBox}>
						<input type="password" required="required" />
						<FaLock className={styles.icon} />
						<span>Confirm Password</span>
					</div>
					<div className={styles.inputBox}>
						<input type="submit" value="Register" />
					</div>
					<p>
						Already have an account?{" "}
						<a href="/register" className={styles.login}>
							Log In!
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
