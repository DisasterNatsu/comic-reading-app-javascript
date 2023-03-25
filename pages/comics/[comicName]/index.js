import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../styles/comicDetails.module.css";
import Link from "next/link";

const Comic = () => {
	return (
		<Container className={styles.container}>
			{/* Top Level Row */}
			<Row>
				<Col xxl={8} xl={8} className={`${styles.leftCol} ${styles.topMargin}`}>
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
										src="/Asset/Covers/mp.webp"
										alt=""
										className={styles.coverImage}
										style={{ border: "1px solid", borderRadius: "1em" }}
									/>
								</Col>
								<Col xl={8} lg={8} md={8} sm={12}>
									{/* Title and First and Last Chapter */}

									<div className={styles.marginLeft}>
										<div className={styles.basicDetails}>
											<h1 className={styles.title}>Martial Peak</h1>
										</div>
										<div className={styles.chapters}>
											<span className={styles.readButton}>
												Read First Chapter
											</span>
											<span className={styles.readButton}>
												Read Latest Chapter
											</span>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
						<Col xxl={12}>
							<div
								className={`${styles.coverWrapper}`}
								style={{ marginTop: "1em" }}
							>
								{/* Chapter Thumbnail + Chapter Number + Chapter Name (Optional) */}
								<div className={styles.chapterBlob}>
									<Link
										className={`decorationNone`}
										style={{ display: "flex" }}
										href={"/comics/[comicName]/[chapter]]"}
										as={"/comics/martial-peak/chapter-3072"}
									>
										{/* Thumbnail Image  */}
										<h6 className={`white ${styles.chapterNumber}`}>
											Chapter 3072 :
										</h6>
										<h6 className={`white ${styles.chapterName}`}>A Bet!</h6>
									</Link>
								</div>
								<hr className={styles.hr} />
							</div>
						</Col>
					</Row>
				</Col>
				{/* Right Side */}
				<Col
					xxl={4}
					xl={4}
					className={`${styles.rightCol} ${styles.topMargin}`}
				>
					<Row>
						<Col xxl={12} className={styles.rightpadding}>
							<div className={styles.coverWrapper}>
								<h4 className={`white ${styles.about}`}>About</h4>
								<h6 className={`white ${styles.summary}`}>Summary</h6>
								<p className={`${styles.description}`}>
									The undefeated spear knight. A shining star from a Duchy
									household that completely shattered the common logic that a
									knight must use a sword. The great hero that put an end to the
									empire’s long civil war. His name was ‘Joshua Sanders’.
									<br />
									<br />
									The man known as the Legendary Spear of the Emperor was
									coughing up blood. By the hands of none other than his lord,
									Emperor Caesar… “Caesar, don’t think that this will be the
									end!!” Staring death in the face with a magic explosion circle
									in front of him, the spear ‘Lukia’ that has been with him for
									decades started shining…
									<br />
									<br /> This familiar place… Is it the stable I used to live in
									as a kid? I even became younger! Lukia, what are you? Joshua
									has returned to his childhood! And now the tale of his epic
									vengeance commences!
								</p>
								<div className={styles.othersWrapper}>
									<h6 className={`white ${styles.summary}`}>Others</h6>
									<div className={` ${styles.otherItems}`}>
										<p className={`${styles.itemKey}`}>Source Language:</p>
										{/* Dynamic Content */}
										<p className={`white ${styles.itemValue}`}>Chinese</p>
									</div>
									<div className={` ${styles.otherItems}`}>
										<p className={`${styles.itemKey} `}>Source Status:</p>
										{/* Dynamic Content */}
										<p className={`white ${styles.itemValue}`}>Ongoing</p>
									</div>
									<div className={` ${styles.otherItems}`}>
										<p className={`${styles.itemKey}`}>Release Status:</p>
										{/* Dynamic Content */}
										<p className={`white ${styles.itemValue}`}>Daily</p>
									</div>
									<div className={` ${styles.otherItems}`}>
										<p className={`${styles.itemKey}`}>Total Chapters:</p>
										{/* Dynamic Content */}
										<p className={`white ${styles.itemValue}`}>3072</p>
									</div>
									<div className={` ${styles.otherItems}`}>
										<p className={`${styles.itemKey}`}>Last Updated:</p>
										{/* Dynamic Content */}
										<p className={`white ${styles.itemValue}`}>5 hours ago</p>
									</div>
								</div>
							</div>
						</Col>
						<Col xxl={12}>{/* Support Us Section */}</Col>
					</Row>
				</Col>
			</Row>
			<div>{/* Comment Section */}</div>
		</Container>
	);
};

export default Comic;
