import React from "react";
import styles from "./styles/cardforcomictab.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const CardComic = () => {
	return (
		<div className={`topBottomMargin`}>
			<h1 className={`white heading ${styles.heading} `}></h1>
			<Row style={{ justifyContent: "space-between",gap:"0.9"}}>
				<Col xxl={3} xl={4} md={5} sm className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img
								src="/Asset/Covers/mp.webp"
								alt="Cover"
								style={{ display: "cover" }}
							/>
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Martial Peak</p>
                                    <p flex-wrap=" nowrap">Last Updated:</p>
                                    <span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>
                            
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                
				<Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>
                            
							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
				<Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
				<Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                
			</Row>
            <Row style={{ justifyContent: "center" }}>
				<Col xxl={3} xl={4} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img
								src="/Asset/Covers/mp.webp"
								alt="Cover"
								style={{ display: "cover" }}
							/>
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                
				<Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>
                            
							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
				<Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
				<Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                <Col xxl={3} xl={3} md={5} className={styles.center}>
					<div className={styles.cardContainer}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<img src="/Asset/Covers/mp.webp" alt="Cover" />
						</Link>
						<div className={styles.chpaterWapper}>
							<Link
								className={`decorationNone`}
								style={{ display: "flex" }}
								href={"/comics/[comicName]/[chapter]]"}
								as={"/comics/martial-peak/chapter-3011"}
							>
								<div className={styles.link}>
									<p className="color">Chapter 3011</p>
									<span className={`${styles.time} color`}>11 hours ago</span>
								</div>
							</Link>

							<div className={styles.link}>
								<p>Chapter 3012</p>
								<span className={styles.time}>11 hours ago</span>
							</div>
							<div className="hot">
								<span className={styles.badge}>Trending</span>
							</div>
						</div>
					</div>
				</Col>
                
			</Row>
		</div>
	);
};

export default CardComic;
