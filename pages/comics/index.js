import React from "react";
import { Container } from "react-bootstrap";
import ComicCard from "/components/comicTab";

const Comic = () => {
	return ( 
		<div>
			<h1 className="white">Comic Catalog</h1>;

			<Container className={"maxWidth"}>
				<ComicCard />

			</Container>
		</div>
	);
};

export default Comic;
