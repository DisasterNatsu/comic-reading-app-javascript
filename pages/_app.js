import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NextUIProvider } from "@nextui-org/react";
import { SSRProvider } from "react-bootstrap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "../libs/ga";
import CookieConsent from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  const Router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    Router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);

  return (
    <SSRProvider>
      <NextUIProvider>
        <CookieConsent
          location="bottom"
          buttonText="I Accept!"
          cookieName="cookie-concent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          overlay={true}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "15px" }}>
            Please read our Cookie Policy <a href="/cookie">Here</a>
          </span>
        </CookieConsent>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  );
}
