import React from "react";
import Link from "next/link";
import Styles from "./styles/comicCards.module.css";
import { Row, Col } from "react-bootstrap";

const comicCards = () => {
	return (
		<div className={`topBottomMargin`}>
			<h1 className={`white heading`}>Hot Comics</h1>
			<Row>
				<Col xs={12} sm={12} md={6} lg={4} xl={3} className={Styles.cardGrid}>
					<div className={Styles.imageWrap}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<div className={Styles.imageContainer}>
								<img
									src="/Asset/Covers/mp.webp"
									alt=""
									className={Styles.image}
								/>
							</div>
							<span className={Styles.title}>Martial Peak</span>
						</Link>
					</div>
				</Col>
				<Col xs={12} sm={12} md={6} lg={4} xl={3} className={Styles.cardGrid}>
					<div className={Styles.imageWrap}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<div className={Styles.imageContainer}>
								<img
									src="/Asset/Covers/mp.webp"
									alt=""
									className={Styles.image}
								/>
							</div>
							<span className={Styles.title}>Martial Peak</span>
						</Link>
					</div>
				</Col>
				<Col xs={12} sm={12} md={6} lg={4} xl={3} className={Styles.cardGrid}>
					<div className={Styles.imageWrap}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<div className={Styles.imageContainer}>
								<img
									src="/Asset/Covers/mp.webp"
									alt=""
									className={Styles.image}
								/>
							</div>
							<span className={Styles.title}>Martial Peak</span>
						</Link>
					</div>
				</Col>
				<Col xs={12} sm={12} md={6} lg={4} xl={3} className={Styles.cardGrid}>
					<div className={Styles.imageWrap}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<div className={Styles.imageContainer}>
								<img
									src="/Asset/Covers/mp.webp"
									alt=""
									className={Styles.image}
								/>
							</div>
							<span className={Styles.title}>Martial Peak</span>
						</Link>
					</div>
				</Col>
				<Col xs={12} sm={12} md={6} lg={4} xl={3} className={Styles.cardGrid}>
					<div className={Styles.imageWrap}>
						<Link
							className="decorationNone"
							href={"/comics/[comicName]"}
							as={"/comics/martial-peak"}
						>
							<div className={Styles.imageContainer}>
								<img
									src="/Asset/Covers/mp.webp"
									alt=""
									className={Styles.image}
								/>
							</div>
							<span className={Styles.title}>Martial Peak</span>
						</Link>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default comicCards;
