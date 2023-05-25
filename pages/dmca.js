import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../Layout/layout";
import styles from "../styles/dmca.module.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

const DMCA = () => {
  return (
    <>
      <NextSeo
        titleTemplate="Disaster Scans - DMCA"
        description="disasterscans.com DMCA decleration"
        canonical="https://disasterscans.com/dmca"
        openGraph={{
          url: "https://disasterscans.com/dmca",
          title: "Disaster Scans - DMCA",
          description: "disasterscans.com DMCA decleration",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Head>
        <title>Disaster Scans - DMCA</title>
      </Head>
      <Layout>
        <Container className={`max-width ${styles.container}`}>
          <h1 className={styles.mainHeading}>
            <strong>DMCA Policy For disasterscans.com</strong>
          </h1>
          <hr style={{ borderBottom: "1px solid #fff", marginBottom: "2em" }} />
          <p className={styles.ptag}>
            The Digital Millennium Copyright Act (“DMCA”) is designed to protect
            content creators from having their work stolen and published by
            other people on the internet.
          </p>
          <p className={styles.ptag}>
            The law specifically targets websites where owners do not know who
            contributed each item of content or that the website is a platform
            for uploading and publishing content.
          </p>
          <p className={styles.ptag}>
            We have the policy to respond to any infringement notice and take
            appropriate action.
          </p>
          <p className={styles.ptag}>
            This Digital Millennium Copyright Act policy applies to the{" "}
            <strong>"https://disasterscans.com"</strong> website (“Website” or
            “Service”) and any of its related products and services
            (collectively, “Services”) and outlines how this Website operator
            (“Operator”, “we”, “us” or “our”) addresses copyright infringement
            notifications and how you (“you” or “your”) may submit a copyright
            infringement complaint.
          </p>
          <p className={styles.ptag}>
            Protection of intellectual property is of utmost importance to us
            and we ask our users and their authorized agents to do the same. It
            is our policy to expeditiously respond to clear notifications of
            alleged copyright infringement that comply with the United States
            Digital Millennium Copyright Act (“DMCA”) of 1998, the text of which
            can be found at the U.S. Copyright Office{" "}
            <a href="https://www.copyright.gov/">
              <strong>website</strong>
            </a>
            .
          </p>
          <h2>
            <strong>
              What to consider before submitting a copyright complaint
            </strong>
          </h2>
          <p className={styles.ptag}>
            Please note that if you are unsure whether the material you are
            reporting is in fact infringing, you may wish to contact an attorney
            before filing a notification with us.
          </p>
          <p className={styles.ptag}>
            The DMCA requires you to provide your personal information in the
            copyright infringement notification. If you are concerned about the
            privacy of your personal information.
          </p>
          <h2>
            <strong>Notifications of infringement</strong>
          </h2>
          <p className={styles.ptag}>
            If you are a copyright owner or an agent thereof, and you believe
            that any material available on our Services infringes your
            copyrights, then you may submit a written copyright infringement
            notification (“Notification”) using the contact details below
            pursuant to the DMCA. All such Notifications must comply with the
            DMCA requirements.
          </p>
          <p className={styles.ptag}>
            Filing a DMCA complaint is the start of a pre-defined legal process.
            Your complaint will be reviewed for accuracy, validity, and
            completeness. If your complaint has satisfied these requirements,
            our response may include the removal or restriction of access to
            allegedly infringing material.
          </p>
          <p className={styles.ptag}>
            If we remove or restrict access to materials or terminate an account
            in response to a Notification of alleged infringement, we will make
            a good faith effort to contact the affected user with information
            concerning the removal or restriction of access.
          </p>
          <p className={styles.ptag}>
            Not with standing anything to the contrary contained in any portion
            of this Policy, the Operator reserves the right to take no action
            upon receipt of a DMCA copyright infringement notification if it
            fails to comply with all the requirements of the DMCA for such
            notifications.
          </p>
          <p className={styles.ptag}>
            The process described in this Policy does not limit our ability to
            pursue any other remedies we may have to address suspected
            infringement.
          </p>
          <h2>
            <strong>Changes and amendments</strong>
          </h2>
          <p className={styles.ptag}>
            We reserve the right to modify this Policy or its terms related to
            the Website and Services at any time at our discretion. When we do,
            we will post a notification on the main page of the Website, send
            you an email to notify you. We may also provide notice to you in
            other ways at our discretion, such as through the contact
            information you have provided.
          </p>
          <p className={styles.ptag}>
            An updated version of this Policy will be effective immediately upon
            the posting of the revised Policy unless otherwise specified. Your
            continued use of the Website and Services after the effective date
            of the revised Policy (or such other act specified at that time)
            will constitute your consent to those changes.
          </p>
          <h2>
            <strong>Reporting copyright infringement</strong>
          </h2>
          <p className={styles.ptag}>
            If you would like to notify us of the infringing material or
            activity, we encourage you to contact us via email address given
            below.
          </p>
          <p className={styles.ptag}>
            <strong>Email: dmca@disasterscans.com</strong>
          </p>
          <p className={styles.ptag}>
            <strong>
              Note: Please allow 1-2 business days for an email response.
            </strong>
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default DMCA;
