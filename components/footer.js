import React from "react";
import { Container } from "react-bootstrap";
import { FaDiscord, FaPaypal, FaPatreon } from "react-icons/fa";
import styles from "./styles/footer.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const Router = useRouter();

  const path = Router.pathname;

  return (
    <Container
      fluid
      className={`${styles.container} ${path === "/about" ? "bottom" : ""}`}
    >
      <div className={styles.fDiv}>
        <h4 className={styles.copyrightText}>© 2023 Jit, Disaster Scans</h4>
      </div>
      <div className={styles.sDiv}>
        <Link
          href={"/dmca"}
          className={styles.status}
          style={{ textDecoration: "none" }}
        >
          <h4 className={styles.status}>DMCA</h4>
        </Link>

        <h4 className={styles.status}>Status</h4>
        <div className={styles.link}>
          <FaPaypal
            className={styles.footerIcon}
            onClick={() => {
              window.open(
                "https://www.paypal.com/paypalme/disasterscans",
                "_blank"
              );
            }}
          />
          <FaDiscord
            className={styles.footerIcon}
            onClick={() => {
              window.open("https://discord.gg/disasterScans", "_blank");
            }}
          />
          <FaPatreon
            className={styles.footerIcon}
            onClick={() => {
              window.open("https://www.patreon.com/martialscans", "_blank");
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
