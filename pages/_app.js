import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}
