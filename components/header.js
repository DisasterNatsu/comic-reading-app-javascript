import React, { useState } from "react";
import styles from "./styles/header.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import { FaDiscord } from "react-icons/fa";
import footstyles from "./styles/footer.module.css";
import UserDropdown from "./userDropdown";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState({ isLoggedin: false, data: null });

  const router = useRouter();

  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      expand="lg"
      className={styles.container}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/Asset/logo.png" alt="logo" className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          style={{ backgroundColor: "#000", zIndex: 10 }}
        >
          <Nav
            className={`me-auto my-2 my-lg-0 ${styles.menu}`}
            style={{ maxHeight: "400px" }}
            navbarScroll
          >
            <Nav.Link
              className={`${styles.menu_item} ${
                router.pathname === "/" ? styles.active : ""
              }`}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${styles.menu_item} ${
                router.pathname.includes("/comics") ? styles.active : ""
              }`}
              href="/comics"
            >
              Comics
            </Nav.Link>
            <Nav.Link
              className={`${styles.menu_item} ${
                router.pathname === "/about" ? styles.active : ""
              } `}
              href="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={`${styles.menu_item} ${
                router.pathname == "/privacy" ? styles.active : ""
              } `}
              href="/privacy"
            >
              Privacy Policy
            </Nav.Link>
          </Nav>

          <div className={`${styles.search}`}>
            <BiSearchAlt className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search for series"
              className={`me-2 ${styles.searchInput}`}
            ></input>
          </div>
          <FaDiscord
            className={footstyles.footerIcon}
            onClick={() => {
              window.open("https://discord.gg/disasterScans", "_blank");
            }}
          />
          <Nav className={`me-auto my-2 my-lg-0 ${styles.user}`} navbarScroll>
            {loggedIn.isLoggedin ? (
              <UserDropdown />
            ) : (
              <>
                <Nav.Link href="/log-in" className={`${styles.menu_item}`}>
                  Log In
                </Nav.Link>
                <Nav.Link href="/register" className={`${styles.menu_item}`}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
