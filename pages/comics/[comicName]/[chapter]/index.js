import React from "react";
import { Container } from "react-bootstrap";
import Buttons from "../../../../components/nextPrevButton";
import styles from "../../../../styles/chapter.module.css";
import Layout from "../../../../Layout/layout";
import { Axios } from "../../../../utils/axios";
import { DiscussionEmbed } from "disqus-react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Chapter = ({ chapter, chapterAll }) => {
  // Defining Router

  const Router = useRouter();

  const comicNameLink = chapter.ComicTitle.toLowerCase().split(" ").join("-");

  const ogUrl = `https://diasterscans.com/comics/${chapter.comicID}-${comicNameLink}/${chapter.chapterID}-chapter-${chapter.ChapterNumber}`;

  // Parsing Images

  const Images = JSON.parse(chapter.pages);

  // Disqus Chapter ID

  const split = Router.query.chapter.split("-");
  const identifier = split[0];

  const title = split.splice(1, split.length - 1).join(" ");

  return (
    <>
      <NextSeo
        titleTemplate={`Disaster Scans - ${chapter.ComicTitle} - ${chapter.ChapterNumber}`}
        description={`Read ${chapter.ComicTitle}'s Chapter ${chapter.ChapterNumber} on Disaster Scans`}
        openGraph={{
          url: ogUrl,
          title: `${chapter.ComicTitle} - ${chapter.ChapterNumber}`,
          description: `Read ${chapter.ComicTitle}'s Chapter ${chapter.ChapterNumber} on Disaster Scans`,
          images: [
            {
              url: `https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${chapter.CoverImage}`,
            },
          ],
        }}
      />
      <Head>
        <title>
          {chapter.ComicTitle} - {chapter.ChapterNumber}
        </title>
      </Head>
      <Layout>
        <Container className="maxWidth">
          <div className="center">
            <h1 className={styles.comicName}>{chapter.ComicTitle}</h1>
            <h1 className={styles.chapter}>
              Chapter {chapter.ChapterNumber}
              {chapter.ChapterName && " - " + chapter.ChapterName}
            </h1>
          </div>
          <Buttons allChapters={chapterAll} currentChapter={chapter} />
          <hr
            style={{
              borderBottom: "2px solid",
              borderColor: "rgb(180, 180, 180)",
              marginBottom: "10px",
            }}
          />
          {Images &&
            Images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${image}`}
                  alt="00"
                  className={styles.coverImage}
                  style={{ padding: ".1em", width: "100%" }}
                />
              );
            })}

          <hr
            style={{
              borderTop: "2px solid",
              borderColor: "rgb(180, 180, 180)",
              marginTop: "10px",
            }}
          />
          <Buttons allChapters={chapterAll} currentChapter={chapter} />
          <hr
            style={{
              borderTop: "2px solid",
              borderColor: "rgb(180, 180, 180)",
              margin: "2em 0",
            }}
          />
          <DiscussionEmbed
            shortname="disasterscansnew"
            config={{
              url: `http://localhost:3000/${Router.query.comicName}/${Router.query.chapter}`,
              identifier: identifier,
              title: title,
            }}
          />
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const ChapterData = await Axios.get(
    `/chapters/${context.params.comicName}/${context.params.chapter}`
  );

  const allChapters = await Axios.get(`/chapters/${context.params.comicName}`);

  const chapter = await ChapterData.data;
  const chapterAll = await allChapters.data;

  if (!chapter.pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      chapter,
      chapterAll,
    },
  };
};

export default Chapter;
