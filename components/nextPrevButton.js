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

const Buttons = () => {
	const router = useRouter();

	// Previous Chpater Function

	const handlePreviousClick = () => {
		const completeLink = router.asPath.split("/"); // Gettting The PathName
		const number =
			parseInt(completeLink[completeLink.length - 1].split("-")[1]) - 1; // Paring it into a Integer and addng the previous Chapter Number

		const newLink = `/comics/${
			completeLink[completeLink.length - 2]
		}/chapter-${number}`; // Creating The New Link

		router.push(newLink); // Pushing The New Link
	};

	// Next Chapter Function

	const handleNextClick = () => {
		const completeLink = router.asPath.split("/"); // Gettting The PathName
		const number =
			parseInt(completeLink[completeLink.length - 1].split("-")[1]) + 1; // Paring it into a Integer and addng the next Chapter Number

		const newLink = `/comics/${
			completeLink[completeLink.length - 2]
		}/chapter-${number}`; // Creating The New Link

		router.push(newLink); // Pushing The New Link
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
				<Button
					variant="danger"
					className={styles.menu}
					onClick={handlePreviousClick}
				>
					<HiOutlineArrowNarrowLeft /> Previous
				</Button>
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
				<Button
					variant="danger"
					className={styles.menu}
					onClick={handleNextClick}
				>
					Next <HiOutlineArrowNarrowRight />
				</Button>
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
