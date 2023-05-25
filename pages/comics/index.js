import React from "react";
import { Container } from "react-bootstrap";
import ComicCards from "../../components/comicCards";
import { useRouter } from "next/router";
import Layout from "../../Layout/layout";
import { Axios } from "../../utils/axios";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Comic = ({ comics }) => {
  // Defining Router

  const Router = useRouter();

  return (
    <>
      <NextSeo
        titleTemplate="Disaster Scans - Comics"
        description="disasterscans.com comics archive"
        openGraph={{
          url: "https://disasterscans.com/comics",
          title: "Disaster Scans - Comics",
          description: "Comics archive of disasterscans.com",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Head>
        <title>Disaster Scans - Comics</title>
      </Head>
      <Layout>
        <div>
          <Container className={"maxWidth"} style={{ textAlign: "center" }}>
            <h1 className="white heading" style={{ margin: "2em 0" }}>
              Comics
            </h1>
            <ComicCards comics={comics} />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  // Sending Request to axios

  const response = await Axios.get("/comics/all/comics");
  const comics = response.data;

  return { props: { comics } };
};

export default Comic;
