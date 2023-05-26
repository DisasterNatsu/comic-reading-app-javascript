import React, { useState, useEffect } from "react";
import styles from "./styles/cardWithChpt.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { Axios } from "../utils/axios";
import Head from "next/head";

const CardWithChapter = () => {
  // Define your states here

  const [lastUpdatedComic, setLastUpdatedComic] = useState();
  const [chapters, setChapters] = useState();

  // Function for getting last two chpaters with the comic Details

  const fetchChapters = async () => {
    const restChapters = await Axios.get("/comics/eight/withChapter");
    const response = await restChapters.data;

    const newArray = [];

    // Dividing The array into two individual parts

    response
      .reduce((accumulator, currentValue, currentIndex, array) => {
        if (currentIndex % 2 === 0) {
          accumulator.push(array.slice(currentIndex, currentIndex + 2));
        }
        return accumulator;
      }, [])
      .map((item, index) => {
        newArray.push(item);
      });
    setChapters(newArray);

    return;
  };

  // Defining useEffects

  useEffect(() => {
    fetchChapters();
  }, []);

  return (
    <>
      <div className={`topBottomMargin`}>
        <Row style={{ justifyContent: "center" }}>
          {chapters &&
            chapters.map((chapter, index) => {
              const comicID = chapter[0].id; // Defining Comic ID
              const ChapterID = chapter[0].chapterID; // Defining Chapter ID
              const ChapterNumber = chapter[0].ChapterNumber; // Defining Chapter Number
              const ChapterID2 = chapter[1].chapterID; // Defining Chapter ID 2
              const ChapterNumber2 = chapter[1].ChapterNumber; // Defining Chapter Number 2

              // Lower Casing The comic Title

              const lowerCaseTitle = chapter[0].ComicTitle.toLowerCase()
                .split(" ")
                .join("-");

              // Defining The Link

              return (
                <Col
                  xxl={3}
                  xl={3}
                  md={5}
                  className={styles.center}
                  key={index}
                >
                  <div className={styles.cardContainer}>
                    <Link
                      className="decorationNone"
                      href={"/comics/[comicName]"}
                      as={`/comics/${comicID}-${lowerCaseTitle}/`}
                    >
                      <img
                        src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${chapter[0].CoverImage}`}
                        alt="Cover"
                      />
                    </Link>
                    <div className={styles.chpaterWapper}>
                      {/* Comic's Name */}

                      <span className={styles.comicName}>
                        {chapter[0].ComicTitle}
                      </span>
                      {/* Latest Chapter */}

                      <Link
                        className={`decorationNone`}
                        style={{ display: "flex" }}
                        href={"/comics/[comicName]/[chapter]]"}
                        as={`/comics/${comicID}-${lowerCaseTitle}/${ChapterID}-chapter-${ChapterNumber}`}
                      >
                        <div className={styles.link}>
                          <p className="color">
                            Chapter {chapter[0].ChapterNumber}
                          </p>
                          <span className={`${styles.time} color`}>
                            11 hours ago
                          </span>
                        </div>
                      </Link>

                      <Link
                        className={`decorationNone`}
                        style={{ display: "flex" }}
                        href={"/comics/[comicName]/[chapter]]"}
                        as={`/comics/${comicID}-${lowerCaseTitle}/${ChapterID2}-chapter-${ChapterNumber2}`}
                      >
                        <div className={styles.link}>
                          <p className="color">
                            Chapter {chapter[1].ChapterNumber}
                          </p>
                          <span className={`${styles.time} color`}>
                            11 hours ago
                          </span>
                        </div>
                      </Link>
                      {chapter[0].Badges && (
                        <div className={chapter[0].Badges}>
                          <span className={styles.badge}>Trending</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
};

export default CardWithChapter;
