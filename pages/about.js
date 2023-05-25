import React from "react";
import Layout from "../Layout/layout";
import { Container } from "react-bootstrap";
import styles from "../styles/about.module.css";
import { Spacer } from "@nextui-org/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

const About = () => {
  return (
    <>
      <NextSeo
        titleTemplate="Disaster Scans - About"
        description="disasterscans.com About decleration"
        canonical="https://disasterscans.com/about"
        openGraph={{
          url: "https://disasterscans.com/about",
          title: "Disaster Scans - About",
          description: "About and Origin of Disaster Scans",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Head>
        <title>Disaster Scans - About</title>
      </Head>
      <Layout>
        <Container className="maxWidth">
          <h2 className={styles.heading}>Our Origin</h2>
          <hr className="white" />
          <p className={`white ${styles.font}`}>
            The Disaster Scans started first as an Youtube channel, with the
            first ever series Natsu, the former group leader picked up is
            Apotheosis and with support of our readers and with Natsu's love for
            manhua we picked up more serieses. However, finally The Disaster
            Scans moved away from YouTube.
          </p>
          <h2 className={styles.heading}>The Journey</h2>
          <hr className="white" />
          <p className={`white ${styles.font}`}>
            The domain <a href="https://disasterscans.com">disasterscans.com</a>{" "}
            along with hosting was first purchased by a reader named KMA, and
            now he is a key member of this group. Along the way we suffered many
            hardships and through all the trials and tribulations we still
            survived with the support of our readers and hopefully, we will
            continue to provide quality releases for our readers.
            <br />
            <br />
            Thank you for supporting us... we couldn't have been able to do it
            without the support from all our readers.
          </p>
          <Spacer y={1} />
        </Container>
      </Layout>
    </>
  );
};

export default About;
