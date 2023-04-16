import React from "react";
import { Container } from "react-bootstrap";
import Buttons from "../../../../components/nextPrevButton";
import styles from "../../../../styles/chapter.module.css";
import Layout from "../../../../Layout/layout";

const Chapter = () => {
	return (
		<Layout>
			<Container className="maxWidth">
				<div className="center">
					<h1 className={styles.comicName}>Comic Name</h1>
				</div>
				<Buttons />
				<hr
					style={{
						borderBottom: "2px solid",
						borderColor: "rgb(180, 180, 180)",
						marginBottom: "10px",
					}}
				/>
				<img
					src="/Asset/chpt/0000.jpg"
					alt="00"
					className={styles.coverImage}
					style={{ padding: ".1em", width: "100%" }}
				/>
				<img
					src="/Asset/chpt/0002.jpg"
					alt="01"
					className={styles.coverImage}
					style={{ padding: ".1em", width: "100%" }}
				/>
				<img
					src="/Asset/chpt/0003 copy.jpg"
					alt="01"
					className={styles.coverImage}
					style={{ padding: ".1em", width: "100%" }}
				/>
				<hr
					style={{
						borderTop: "2px solid",
						borderColor: "rgb(180, 180, 180)",
						marginTop: "10px",
					}}
				/>
				<Buttons />
			</Container>
		</Layout>
	);
};

export default Chapter;
