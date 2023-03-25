import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles/carousel.module.css";

const ControlledCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			className={styles.container}
		>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/Asset/BannerMP.png"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/Asset/BannerDTR.png"
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="/Asset/BannerYZ.png"
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default ControlledCarousel;
