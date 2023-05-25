import React, { useState } from "react";
import styles from "../styles/logIn.module.css";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useRouter } from "next/router";
import { Axios } from "../utils/axios";
import Cookies from "js-cookie";
import { NextSeo } from "next-seo";
import Head from "next/head";

const LogIn = () => {
  // Defining Router

  const Router = useRouter();

  // Defining States

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // States for Fading

  const [fadeClass, setFedClass] = useState("");

  // Error Showing Function

  const errorShowing = () => {
    setInterval(() => {
      setFedClass("fadeOut");
    }, 7000);
    setTimeout(() => {
      setFedClass("");
      setError("");
    }, 8000);
  };

  // Submit Function

  const Submit = async (e) => {
    e.preventDefault();

    // Error Handling

    if (!email || !password) {
      setError("Both Fields are required!");
      return errorShowing();
    } else if (password.length <= 5) {
      setError("Password must be over five characters!");
      return errorShowing();
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const loggingIn = await Axios.post("/user/log-in", data); // Making the request

      const response = await loggingIn.data;

      // Setting Cookie

      Cookies.set("disaster-scans", response.authToken);

      setSuccess(`Welcome ${response.UserName}`);

      return Router.replace("/home");
    } catch (error) {
      console.log(error.response.data.message);

      error.response.data.message && setError(error.response.data.message);
      return errorShowing();
    }
  };

  return (
    <>
      <NextSeo
        titleTemplate="Disaster Scans - User Log In"
        description="User Log In Page for disasterscans.com"
        canonical="https://disasterscans.com/log-in"
        openGraph={{
          url: "https://disasterscans.com/log-in",
          title: "Disaster Scans - User Log In",
          description: "User Log In Page for disasterscans.com",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Head>
        <title>Disaster Scans - User Log In</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/Asset/logo.png" alt="logo" className={styles.logo} />
          <form className={`${styles.form} ${styles.signIn}`} onSubmit={Submit}>
            <div className={styles.inputBox}>
              <input
                type="email"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaRegEnvelope className={styles.icon} />
              <span>Email</span>
            </div>
            <div className={styles.inputBox}>
              <input
                type="password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FiLock className={styles.icon} />
              <span>Password</span>
            </div>
            {error && (
              <p className={`${styles.errorText} ${fadeClass}`}>{error}</p>
            )}
            {success && <p className={styles.success}>{success}</p>}
            <div className={styles.inputBox}>
              <input type="submit" value="Log In" />
            </div>
            <p>
              Don't have an account?{" "}
              <a href="/register" className={styles.register}>
                Register!
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
