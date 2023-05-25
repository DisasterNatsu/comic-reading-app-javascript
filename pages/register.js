import React, { useState, useEffect } from "react";
import styles from "../styles/logIn.module.css";
import { FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { Axios } from "../utils/axios";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Head from "next/head";

const LogIn = () => {
  // Defining Router

  const Router = useRouter();

  // Define your classes here
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // States for Fading

  const [fadeClass, setFedClass] = useState("");

  // Error Showing Handle

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

    if (!userName || !email || !password || !passwordCheck) {
      setError("Required details are not provided!");
      return errorShowing();
    } else if (password !== passwordCheck) {
      setError("Password and Confirmed Password doesn't match!");
      return errorShowing();
    } else if (password.length <= 5) {
      setError("Password must have more then five characters!");
      return errorShowing();
    }

    const data = {
      userName: userName,
      email: email,
      password: password,
      passwordCheck: passwordCheck,
    };

    try {
      const newUser = await Axios.post("/user/register", data); // Sending data to axios

      const response = await newUser.data;
      console.log(response);
      setSuccess(response.message);

      setTimeout(() => {
        Router.replace("/log-in");
      }, 3000);

      console.log(data);
    } catch (error) {
      console.log(error);
      error.data.message && setError(error.data.message);
      return errorShowing();
    }
  };

  // useEffect

  return (
    <>
      <NextSeo
        titleTemplate="Disaster Scans - User Register"
        description="User Registretion Page for disasterscans.com"
        canonical="https://disasterscans.com/register"
        openGraph={{
          url: "https://disasterscans.com/register",
          title: "Disaster Scans - User Register",
          description: "User Register Page for disasterscans.com",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Head>
        <title>Disaster Scans - User Register</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form
            className={`${styles.form} ${styles.register}`}
            onSubmit={Submit}
          >
            <img src="/Asset/logo.png" alt="logo" className={styles.logo} />

            <div className={styles.inputBox}>
              <input
                type="text"
                required="required"
                onChange={(e) => setUserName(e.target.value)}
              />
              <FaRegUser className={styles.icon} />
              <span>Username</span>
            </div>
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
              <span>Create Password</span>
            </div>
            <div className={styles.inputBox}>
              <input
                type="password"
                required="required"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <FaLock className={styles.icon} />
              <span>Confirm Password</span>
            </div>
            {error && (
              <p className={`${styles.errorText} ${fadeClass}`}>{error}</p>
            )}
            {success && <p className={styles.success}>{success}</p>}
            <div className={styles.inputBox}>
              <input type="submit" value="Register" />
            </div>
            <p>
              Already have an account?{" "}
              <a href="/log-in" className={styles.login}>
                Log In!
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
