import React from "react";
import Header from "../components/header";
import ControlledCarousel from "../components/carousel";
import styles from "../styles/home.module.css";
import ComicCards from "../components/comicCards";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import CardWithChapter from "../components/cardWithChpt";

const Home = () => {
	return (
		<div className={styles.container}>
			<Container className={"maxWidth"}>
				<ControlledCarousel />
				<CardWithChapter />
				<ComicCards />
			</Container>
		</div>
	);
};

export default Home;
