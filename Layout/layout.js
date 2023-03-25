import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
	return (
		<>
			<main>
				<Header />
				{children}
				<Footer />
			</main>
		</>
	);
};

export default Layout;
