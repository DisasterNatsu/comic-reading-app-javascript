import React, { useState, useEffect } from "react";
import styles from "../styles/header.module.css";
import Router, { useRouter } from "next/router";
import { Navbar, Text, Avatar, Dropdown, Input, Link } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Cookies from "js-cookie";
import { Axios } from "../../utils/axios";
import Image from "next/image";

const Header = () => {
  // Define your states here

  const [searchValue, setSearchValue] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState();
  const [showRes, setShowRes] = useState(false);
  const [comics, setComics] = useState();

  const router = useRouter(); // Defining Router

  const link = router.pathname;

  // Function For Handling Search

  const HandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // On foucs Api Call

  const onFocus = async () => {
    setShowRes(true);

    const Comics = await Axios.get("/comics/search/comics");

    const result = await Comics.data;

    result && setComics(result);
  };

  // Check if Logged In Programme

  const isLoggedIn = async () => {
    const token = Cookies.get("disaster-scans"); // Getting Token

    if (!token) {
      return setLoggedIn(false);
    }

    try {
      const isAuth = await Axios.post("/user/auth", null, {
        headers: {
          "disaster-scans-token": token,
        },
      });

      const response = await isAuth.data;

      setLoggedIn(true);
      setUserName(response.userName);
    } catch (error) {
      console.log(error);
      return setLoggedIn(false);
    }
  };

  // UseEffect

  useEffect(() => {
    isLoggedIn();
  }, [link]);

  // Log Out Function

  const Action = (actionKey) => {
    switch (actionKey) {
      case "logout":
        Cookies.set("disaster-scans", "");
        Router.reload();

        break;

      default:
        break;
    }
  };

  return (
    <>
      <Navbar
        isBordered={true}
        variant="static"
        containerCss={{ backgroundColor: "#000" }}
      >
        <Navbar.Toggle aria-label="toggle navigation" showIn={"sm"} />
        <Navbar.Brand css={{ mr: "$4" }} hideIn={"sm"}>
          <Link href="/home">
            <img
              loading="lazy"
              src="/Asset/logo.png"
              alt="logo"
              className={styles.logo}
            />
          </Link>
          <Navbar.Content hideIn="sm" variant="highlight" activeColor="warning">
            <Navbar.Link
              isActive={link && link === "/home" ? true : false}
              href="/home"
              css={{ color: "#fff" }}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              href="/comics"
              isActive={link.includes("/comics")}
              css={{ color: "#fff" }}
            >
              Comics
            </Navbar.Link>
            <Navbar.Link
              href="/about"
              isActive={link && link === "/about" ? true : false}
              css={{ color: "#fff" }}
            >
              About
            </Navbar.Link>
            <Navbar.Link
              href="/privacy"
              isActive={link && link === "/privacy"}
              css={{ color: "#fff" }}
            >
              Privacy
            </Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
          hideIn={"sm"}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
                color: "#fff",
              },
            }}
          >
            <div>
              <Input
                clearable
                contentLeft={
                  <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
                }
                contentLeftStyling={false}
                onChange={HandleSearch}
                value={searchValue}
                aria-label="search bar"
                css={{
                  w: "25em",
                  "@xsMax": {
                    mw: "800px",
                  },
                  "& .nextui-input-content--left": {
                    h: "100%",
                    ml: "$4",
                    dflex: "center",
                  },
                }}
                placeholder="Search..."
                list="data"
                onFocus={onFocus}
                onBlur={() => {
                  setShowRes(false);
                  setSearchValue("");
                }}
              />
              {showRes && (
                <div
                  aria-label="search results container"
                  className={styles.seatContainer}
                >
                  {searchValue.length !== 0 ? (
                    <div style={{ padding: "1em" }} className={styles.results}>
                      <h6 className="text-white">Comics</h6>
                      {comics
                        .filter((comic) => {
                          const searchTerm = searchValue.toLocaleLowerCase();
                          const comicName =
                            comic.ComicTitle.toLocaleLowerCase();

                          if (comicName.includes(searchTerm)) {
                            return comicName.includes(searchTerm);
                          } else {
                            return;
                          }
                        })
                        .map((comic, index) => {
                          return (
                            <Link href="#" key={index}>
                              <div className={styles.singleValueContainer}>
                                <Image
                                  src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${comic.CoverImage}`}
                                  width={70}
                                  height={90}
                                  style={{ objectFit: "cover" }}
                                />
                                <span className={styles.title}>
                                  {comic.ComicTitle}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  ) : (
                    <p
                      className={styles.dummyText}
                      aria-label="search results dummy text"
                    >
                      Search Your Comic...
                    </p>
                  )}
                </div>
              )}
            </div>
          </Navbar.Item>
        </Navbar.Content>

        {/* Login and Register Or The LogIn Avatar */}

        <Navbar.Content>
          {loggedIn ? (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="warning"
                    size="md"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="warning"
                onAction={Action}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {userName}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  <Link href="#">Account Settings</Link>
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">
                  Tracked Comics
                </Dropdown.Item>

                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item
                  key="logout"
                  withDivider
                  color="error"
                  as="button"
                  css={{
                    w: "100%",
                  }}
                >
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Navbar.Link href="/log-in" css={{ color: "#fff" }}>
                Login
              </Navbar.Link>
              <Navbar.Link href="/register" css={{ color: "#fff" }}>
                Register
              </Navbar.Link>
            </>
          )}
        </Navbar.Content>

        {/* Navbar Collapse Code */}

        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <img
              src="/Asset/logo.png"
              alt="logo"
              className={styles.collapseLogo}
            />
          </Navbar.CollapseItem>

          {/* Search Bar */}

          <Navbar.CollapseItem>
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "800px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.CollapseItem>

          {/* Home */}

          <Navbar.CollapseItem
            activeColor="warning"
            isActive={link.includes("/home")}
          >
            <Link
              color="inherit"
              href="/home"
              css={{
                minWidth: "100%",
              }}
            >
              <span className={styles.collapseLink}>Home</span>
            </Link>
          </Navbar.CollapseItem>

          {/* Comics */}

          <Navbar.CollapseItem
            activeColor="warning"
            isActive={link.includes("/comics")}
          >
            <Link
              color="inherit"
              href="/comics"
              css={{
                minWidth: "100%",
              }}
            >
              <span className={styles.collapseLink}>Comics</span>
            </Link>
          </Navbar.CollapseItem>

          {/* Privacy */}

          <Navbar.CollapseItem
            activeColor="warning"
            isActive={link.includes("/about")}
          >
            <Link
              color="inherit"
              href="/about"
              css={{
                minWidth: "100%",
              }}
            >
              <span className={styles.collapseLink}>About</span>
            </Link>
          </Navbar.CollapseItem>

          {/* Privacy */}

          <Navbar.CollapseItem
            activeColor="warning"
            isActive={link.includes("/privacy")}
          >
            <Link
              color="inherit"
              href="/privacy"
              css={{
                minWidth: "100%",
              }}
            >
              <span className={styles.collapseLink}>Privacy</span>
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>

    // Bootstrap Nav Bar

    // <Navbar
    //   collapseOnSelect
    //   bg="dark"
    //   expand="lg"
    //   className={styles.container}
    //   variant="dark"
    // >
    //   <Container fluid>
    //     <Navbar.Brand href="/">
    //       <img src="/Asset/logo.png" alt="logo" className={styles.logo} />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse
    //       id="navbarScroll"
    //       style={{ backgroundColor: "#000", zIndex: 10 }}
    //     >
    //       <Nav
    //         className={`me-auto my-2 my-lg-0 ${styles.menu}`}
    //         style={{ maxHeight: "400px" }}
    //         navbarScroll
    //       >
    //         <Nav.Link
    //           className={`${styles.menu_item} ${
    //             router.pathname === "/home" ? styles.active : ""
    //           }`}
    //           href="/home"
    //         >
    //           Home
    //         </Nav.Link>
    //         <Nav.Link
    //           className={`${styles.menu_item} ${
    //             router.pathname.includes("/comics") ? styles.active : ""
    //           }`}
    //           href="/comics"
    //         >
    //           Comics
    //         </Nav.Link>
    //         <Nav.Link
    //           className={`${styles.menu_item} ${
    //             router.pathname === "/about" ? styles.active : ""
    //           } `}
    //           href="/about"
    //         >
    //           About
    //         </Nav.Link>
    //         <Nav.Link
    //           className={`${styles.menu_item} ${
    //             router.pathname == "/privacy" ? styles.active : ""
    //           } `}
    //           href="/privacy"
    //         >
    //           Privacy Policy
    //         </Nav.Link>
    //       </Nav>

    //       <div className={`${styles.search}`}>
    //         <BiSearchAlt className={styles.searchIcon} />
    //         <input
    //           type="search"
    //           placeholder="Search for series"
    //           className={`me-2 ${styles.searchInput}`}
    //         ></input>
    //       </div>
    //       <FaDiscord
    //         className={footstyles.footerIcon}
    //         onClick={() => {
    //           window.open("https://discord.gg/disasterScans", "_blank");
    //         }}
    //       />
    //       <Nav className={`me-auto my-2 my-lg-0 ${styles.user}`} navbarScroll>
    //         {loggedIn.isLoggedin ? (
    //           <UserDropdown />
    //         ) : (
    //           <>
    //             <Nav.Link href="/log-in" className={`${styles.menu_item}`}>
    //               Log In
    //             </Nav.Link>
    //             <Nav.Link href="/register" className={`${styles.menu_item}`}>
    //               Register
    //             </Nav.Link>
    //           </>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
