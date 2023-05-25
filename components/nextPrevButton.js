import React from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineMenuFold, AiFillHome } from "react-icons/ai";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import styles from "./styles/buttons.module.css";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";

const Buttons = ({ allChapters, currentChapter }) => {
  const Router = useRouter();

  // Getting Current Chapter Index and if there are any other chapter for the comic

  const innerIndex = allChapters.findIndex(
    (x) => x.chapterID == currentChapter.chapterID
  );

  const router = useRouter();

  // Previous Chpater Function

  const handlePreviousClick = () => {
    const prevChapterId = allChapters[innerIndex + 1].chapterID;
    const prevChapterNumber = allChapters[innerIndex + 1].chapterNumber;

    const comicPartName = Router.query.comicName;

    const link = `/comics/${comicPartName}/${prevChapterId}-chapter-${prevChapterNumber}`;

    Router.push(link);
  };

  // Next Chapter Function

  const handleNextClick = () => {
    const prevChapterId = allChapters[innerIndex - 1].chapterID;
    const prevChapterNumber = allChapters[innerIndex - 1].chapterNumber;

    const comicPartName = Router.query.comicName;

    const link = `/comics/${comicPartName}/${prevChapterId}-chapter-${prevChapterNumber}`;

    Router.push(link);
  };

  // Returning to Chapters Page

  const chapterArchive = () => {
    const completeLink = router.asPath.split("/");

    const newLink = `/comics/${completeLink[completeLink.length - 2]}`;
    router.push(newLink);
  };

  // To home Page

  const Home = () => {
    router.push("/");
  };

  return (
    <Container className="maxWidth">
      <div className={styles.btnWrapper}>
        {innerIndex !== allChapters.length - 1 ? (
          <Button
            variant="danger"
            className={styles.menu}
            onClick={handlePreviousClick}
          >
            <HiOutlineArrowNarrowLeft /> Previous
          </Button>
        ) : (
          <div></div>
        )}

        <div>
          <Button
            variant="danger"
            className={styles.menu}
            onClick={chapterArchive}
          >
            <AiOutlineMenuFold />
          </Button>
          <Button variant="danger" className={styles.menu} onClick={Home}>
            <AiFillHome />
          </Button>
        </div>
        {innerIndex !== 0 ? (
          <Button
            variant="danger"
            className={styles.menu}
            onClick={handleNextClick}
          >
            Next <HiOutlineArrowNarrowRight />
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <Dropdown
        style={{ textAlign: "center" }}
        className={styles.dropDownWrapper}
      >
        <Dropdown.Toggle
          variant="danger"
          id="dropdown-basic"
          className={styles.dropDown}
        >
          <AiOutlineMenuFold />
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" className={styles.dropDownMenu}>
          <Dropdown.Item href="#/action-1">
            <Button
              variant="warning"
              className={styles.menu}
              onClick={handlePreviousClick}
            >
              <HiOutlineArrowNarrowLeft /> Previous
            </Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Button
              variant="warning"
              className={styles.menu}
              onClick={handleNextClick}
            >
              Next <HiOutlineArrowNarrowRight />
            </Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default Buttons;
