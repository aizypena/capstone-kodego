import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";

function Header() {
    return (
        <div>
            <div className="navbar-bg">
                <Navbar expand="lg" variant="dark" className="navbar-bg">
                    <Container fluid className="navbar-bg container">
                        <Navbar.Brand href="#">
                            <Link as={Link} to="/">
                                <svg
                                    id="logo-16"
                                    width="109"
                                    height="43"
                                    viewBox="0 0 109 43"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {" "}
                                    <path
                                        d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
                                        class="ccompli1"
                                        fill="#62964a"
                                        stop-color="#62964a"
                                    ></path>{" "}
                                    <path
                                        d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
                                        class="ccompli2"
                                        fill="#fa1100"
                                        stop-color="#fa1100"
                                    ></path>{" "}
                                    <path
                                        d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
                                        class="ccustom"
                                        fill="#599dad"
                                        stop-color="#599dad"
                                    ></path>{" "}
                                    <path
                                        d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
                                        class="ccustom"
                                        fill="#599dad"
                                        stop-color="#599dad"
                                    ></path>{" "}
                                </svg>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">
                                    <Link
                                        className="nav-content"
                                        as={Link}
                                        to="/"
                                    >
                                        HOME
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link
                                        className="nav-content"
                                        as={Link}
                                        to="/about"
                                    >
                                        ABOUT
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action3">
                                    <Link
                                        className="nav-content"
                                        as={Link}
                                        to="/booking"
                                    >
                                        BOOKING
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="///">
                                    <Link
                                        className="nav-content"
                                        as={Link}
                                        to="/contactus"
                                    >
                                        CONTACT US
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="/login">
                                    <Link
                                        className="nav-content"
                                        as={Link}
                                        to="/login"
                                    >
                                        LOGIN
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;
