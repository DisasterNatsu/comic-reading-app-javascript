import React from "react";
import Link from "next/link";
import Styles from "./styles/comicCards.module.css";
import { Row, Col } from "react-bootstrap";

const comicCards = ({ comics }) => {
  // Error Handling

  if (!comics) {
    return (
      <div>
        <h1>No Comics Found!</h1>
      </div>
    );
  }

  return (
    <div className={`topBottomMargin`}>
      <Row>
        {comics.map((comic, index) => {
          // The Comic Name to lower case and also replace spaces with -

          const lowerCaseName = comic.ComicTitle.toLowerCase()
            .split(" ")
            .join("-");

          // Defining URL
          const comicUrl = "/comics/" + comic.id + "-" + lowerCaseName;

          return (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className={Styles.cardGrid}
              key={index}
            >
              <div className={Styles.imageWrap}>
                <Link className="decorationNone" href={comicUrl}>
                  <div className={Styles.imageContainer}>
                    <img
                      src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${comic.CoverImage}`}
                      alt={`${comic.ComicTitle} Cover Image`}
                      className={Styles.image}
                    />
                  </div>
                  <p className={Styles.title}>{comic.ComicTitle}</p>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default comicCards;
