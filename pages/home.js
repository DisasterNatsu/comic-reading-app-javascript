import React from "react";
import ControlledCarousel from "../components/carousel";
import styles from "../styles/home.module.css";
import ComicCards from "../components/comicCards";
import { Container } from "react-bootstrap";
import CardWithChapter from "../components/cardWithChpt";
import Layout from "../Layout/layout";
import { Axios } from "../utils/axios";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Home = ({ comics }) => {
  return (
    <>
      <NextSeo
        titleTemplate="Disaster Scans - Home"
        description="disasterscans.com Home Page where we provide quality translation of Manhua"
        canonical="https://disasterscans.com/home"
        openGraph={{
          url: "https://disasterscans.com/home",
          title: "Disaster Scans - Home",
          description: "disasterscans.com Home Manhua",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Head>
        <title>Disaster Scans - Home</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <Container className={"maxWidth"}>
            <ControlledCarousel />
            <h1 className={`white heading`}>Latest Releases</h1>
            <CardWithChapter />
            <h1 className="white heading">Latest Comics</h1>
            {comics ? (
              <ComicCards comics={comics} />
            ) : (
              <h1 className="text-white center mt-5">No Comics Found</h1>
            )}
          </Container>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await Axios.get("/comics/all/comics");
  const comics = res.data;

  return { props: { comics } };
};

export default Home;
