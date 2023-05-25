import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../styles/comicDetails.module.css";
import Link from "next/link";
import Layout from "../../../Layout/layout";
import { useRouter } from "next/router";
import { Axios } from "../../../utils/axios";
import { Pagination } from "@nextui-org/react";
import { DiscussionEmbed } from "disqus-react";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Comic = (props) => {
  const comic = props.comic;
  const chapter = props.chapters;

  const comicName = comic.ComicTitle.toLowerCase().split(" ").join("-");
  const ogUrl = `https://disasterscans.com/comics/${comic.id}-${comicName}`;

  // Log Comics

  console.log(ogUrl);

  // Defining Router

  const Router = useRouter();

  // Queries From Disqus

  const split = Router.query.comicName.split("-");

  const comicId = JSON.parse(split[0]);

  const name = split.splice(1, split.length - 1).join(" ");

  // Define Your States Here

  const [width, setWidth] = useState();
  const [comicsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const [chapters] = useState(chapter);

  // The UseEffect

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleSize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleSize);

      return () => window.removeEventListener("resize", handleSize);
    }
  }, [typeof window !== "undefined"]);

  // The Right Row

  const RightRow = () => {
    return (
      <Col xxl={12} className={styles.rightpadding}>
        <div className={styles.coverWrapper}>
          <h4 className={`white ${styles.about}`}>About</h4>
          <h6 className={`white ${styles.summary}`}>Summary</h6>
          <p className={`${styles.description}`}>{comic.Description}</p>
          <div className={styles.othersWrapper}>
            <h6 className={`white ${styles.summary}`}>Others</h6>
            <div className={` ${styles.otherItems}`}>
              <p className={`${styles.itemKey}`}>Author:</p>
              {/* Dynamic Content */}
              <p className={`white ${styles.itemValue}`}>{comic.Author}</p>
            </div>
            <div className={` ${styles.otherItems}`}>
              <p className={`${styles.itemKey}`}>Artist:</p>
              {/* Dynamic Content */}
              <p className={`white ${styles.itemValue}`}>{comic.Artist}</p>
            </div>
            <div className={` ${styles.otherItems}`}>
              <p className={`${styles.itemKey}`}>Source Language or Origin:</p>
              {/* Dynamic Content */}
              <p className={`white ${styles.itemValue}`}>{comic.Origin}</p>
            </div>
            <div className={` ${styles.otherItems}`}>
              <p className={`${styles.itemKey} `}>Source Status:</p>
              {/* Dynamic Content */}
              <p className={`white ${styles.itemValue}`}>{comic.Status}</p>
            </div>
            <div className={` ${styles.otherItems}`}>
              <p className={`${styles.itemKey}`}>Release Status:</p>
              {/* Dynamic Content */}
              <p className={`white ${styles.itemValue}`}>Daily</p>
            </div>
            <div className={` ${styles.otherItems}`}>
              <p className={`${styles.itemKey}`}>Total Chapters:</p>
              {/* Dynamic Content */}
              <p className={`white ${styles.itemValue}`}>
                {chapter ? chapter.length : "0"}
              </p>
            </div>
            <div className={` ${styles.otherItems}`}>
              <p className={`${styles.itemKey}`}>Last Updated:</p>
              {/* Dynamic Content */}
              <p className={`white ${styles.itemValue}`}>5 hours ago</p>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  // The Chapter List

  const ChapterList = () => {
    // Returning if no Chpaters

    if (!chapters) {
      return (
        <div style={{ marginTop: "2em", textAlign: "center" }}>
          <h1 className="text-white">No Chapters Found</h1>
        </div>
      );
    }

    // Defining Index

    const indexOfLastChapter = currentPage * comicsPerPage;
    const indexOfFirstChapter = indexOfLastChapter - comicsPerPage;
    const currentChapters = chapters.slice(
      indexOfFirstChapter,
      indexOfLastChapter
    );

    return (
      <Col xxl={12}>
        <div className={`${styles.coverWrapper}`} style={{ marginTop: "1em" }}>
          {/* Chapter Thumbnail + Chapter Number + Chapter Name (Optional) */}
          {currentChapters &&
            currentChapters.map((chpt, index) => {
              // Defining The Link

              const link =
                "/comics/" +
                Router.query.comicName +
                "/" +
                chpt.chapterID +
                "-chapter-" +
                chpt.chapterNumber;

              // The Return Statement

              return (
                <div key={index}>
                  <div className={styles.chapterBlob}>
                    <Link
                      className={`decorationNone`}
                      style={{ display: "flex" }}
                      href={"/comics/[comicName]/[chapter]]"}
                      as={link}
                    >
                      {/* Thumbnail Image  */}
                      <h6 className={`white ${styles.chapterNumber}`}>
                        Chapter {chpt.chapterNumber}:
                      </h6>
                      {chpt.ChapterName && (
                        <h6 className={`white ${styles.chapterName}`}>
                          {chpt.ChapterName}
                        </h6>
                      )}
                    </Link>
                  </div>
                  {index != chapter.length - 1 ? (
                    <hr className={styles.hr} />
                  ) : null}
                </div>
              );
            })}
        </div>
        {chapters.length / 30 > 1 ? (
          <Pagination
            color={"gradient"}
            className="mt-3"
            total={Math.ceil(chapter.length / 30)}
            initialPage={1}
            onChange={(e) => setCurrentPage(e)}
          />
        ) : null}
      </Col>
    );
  };

  return (
    <>
      <NextSeo
        titleTemplate="Disaster Scans - Comics"
        description={`Read Martial Peak English Online - ${comic.Description}`}
        openGraph={{
          url: ogUrl,
          title: "Disaster Scans - Comics",
          description: `Read ${comic.ComicTitle} English Online - ${comic.Description}`,
          images: [
            {
              url: `https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${comic.CoverImage}`,
            },
          ],
        }}
      />
      <Head>
        <title>Disaster Scans - {comic.ComicTitle}</title>
      </Head>
      <Layout>
        <Container className={styles.container}>
          {/* Top Level Row */}
          <Row>
            <Col
              xxl={8}
              xl={8}
              className={`${styles.leftCol} ${styles.topMargin}`}
            >
              {/* Cover Image And Chapters Row */}
              <Row>
                <Col xxl={12}>
                  <Row className={styles.coverWrapper}>
                    {/* Cover Image */}
                    <Col
                      xl={4}
                      lg={4}
                      md={4}
                      sm={12}
                      style={{ display: "grid", justifyContent: "center" }}
                    >
                      <img
                        src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${comic.CoverImage}`}
                        alt=""
                        className={styles.coverImage}
                        style={{ border: "1px solid", borderRadius: "1em" }}
                      />
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={12}>
                      {/* Title and First and Last Chapter */}

                      <div className={styles.marginLeft}>
                        <div className={styles.basicDetails}>
                          <h1 className={styles.title}>{comic.ComicTitle}</h1>
                        </div>
                        {chapter && (
                          <div
                            className={styles.chapters}
                            style={{ marginTop: "1em" }}
                          >
                            <Link
                              href={`/comics/${Router.query.comicName}/${
                                chapter[chapter.length - 1].chapterID
                              }-chapter-${
                                chapter[chapter.length - 1].chapterNumber
                              }`}
                              className="decorationNone"
                            >
                              <span className={styles.readButton}>
                                Read First Chapter
                              </span>
                            </Link>
                            <Link
                              href={`/comics/${Router.query.comicName}/${chapter[0].chapterID}-chapter-${chapter[0].chapterNumber}`}
                              className="decorationNone"
                            >
                              <span className={styles.readButton}>
                                Read Latest Chapter
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Col>
                {width <= 1200 ? <RightRow /> : <ChapterList />}
              </Row>
            </Col>
            {/* Right Side */}
            <Col
              xxl={4}
              xl={4}
              className={`${styles.rightCol} ${styles.topMargin}`}
            >
              <Row>
                {width <= 1200 ? <ChapterList /> : <RightRow />}

                <Col xxl={12}>{/* Support Us Section */}</Col>
              </Row>
            </Col>
          </Row>
          <hr style={{ color: "#fff", margin: "2em auto" }} />
          <Container className={styles.commentContainer}>
            <DiscussionEmbed
              shortname="disasterscansnew"
              config={{
                url: `http://localhost:3000/${Router.query.comicName}`,
                identifier: comicId,
                title: name,
              }}
            />
          </Container>
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const ComicRes = await Axios.get(`/comics/${context.params.comicName}`);
  const ChapterRes = await Axios.get(`/chapters/${context.params.comicName}`);

  const comic = await ComicRes.data;
  const chapters = await ChapterRes.data;

  if (!comic) {
    return {
      notFound: true,
    };
  }
  if (
    (comic && !chapters) ||
    chapters.message === "There are no Chapters for that comic"
  ) {
    return {
      props: {
        comic,
      },
    };
  }
  return {
    props: {
      comic,
      chapters,
    },
  };
};

export default Comic;
